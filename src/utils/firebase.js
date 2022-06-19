import firebase from 'firebase/compat/app';
import { Platform, InteractionManager } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { initializeApp, setLogLevel } from 'firebase/app';
import 'firebase/compat/database';
import { getDatabase, ref, set, onValue } from 'firebase/database';

import { generateUuid } from './uuid';

// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
  const timerFix = {};
  const runTask = (id, fn, ttl, args) => {
    const waitingTime = ttl - Date.now();
    if (waitingTime <= 1) {
      InteractionManager.runAfterInteractions(() => {
        if (!timerFix[id]) {
          return;
        }
        delete timerFix[id];
        fn(...args);
      });
      return;
    }

    const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
    timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
  };

  global.setTimeout = (fn, time, ...args) => {
    if (MAX_TIMER_DURATION_MS < time) {
      const ttl = Date.now() + time;
      const id = '_lt_' + Object.keys(timerFix).length;
      runTask(id, fn, ttl, args);
      return id;
    }
    return _setTimeout(fn, time, ...args);
  };

  global.clearTimeout = (id) => {
    if (typeof id === 'string' && id.startsWith('_lt_')) {
      _clearTimeout(timerFix[id]);
      delete timerFix[id];
      return;
    }
    _clearTimeout(id);
  };
}
// End of workaround

const firebaseConfig = {
  databaseURL: Constants.manifest.extra.firebaseDatabaseUrl,
};

let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
  setLogLevel('silent');
}

const reference = (namespace, uuid) => {
  return ref(getDatabase(app), `${namespace}/${uuid}`);
};

export const upload = async (namespace, record) => {
  const withoutUndefineds = JSON.parse(JSON.stringify(record));
  const shareUuid = generateUuid();
  await set(reference(namespace, shareUuid), withoutUndefineds);
  return shareUuid;
};

export const download = (namespace, uuid) => {
  return onValue(eference(namespace, uuid), (snapshot) => snapshot.val());
};

export const createLink = (path, title, description) => {
  if (__DEV__) {
    return Linking.makeUrl(path);
  } else {
    return fetch(
      `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${Constants.manifest.extra.firebaseApiKey}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dynamicLinkInfo: {
            domainUriPrefix: Constants.manifest.extra.firebaseDomainUri,
            link: `${Constants.manifest.extra.firebaseUrlPrefix}${path}`,
            androidInfo: {
              androidPackageName: 'com.discin.discin',
              androidMinPackageVersionCode: '5',
            },
            iosInfo: {
              iosBundleId: 'com.discin.discin',
              iosCustomScheme: 'discin',
              iosAppStoreId: '1537387830',
            },
            desktopInfo: {
              desktopFallbackLink: 'https://play.google.com/store/apps/details?id=com.discin.discin',
            },
            socialMetaTagInfo: {
              socialTitle: `Disc In - ${title}`,
              socialDescription: description,
              socialImageLink: 'https://raw.githubusercontent.com/disc-in/UltimateApp/master/assets/icon.png',
            },
          },
        }),
      },
    )
      .then((response) => response.json())
      .then((responseJson) => responseJson.shortLink);
  }
};
