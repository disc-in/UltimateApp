import firebase from 'firebase/app';
import 'firebase/database';
import { Platform, InteractionManager } from 'react-native';
import * as Linking from 'expo-linking';

import {
  EXPO_FIREBASE_DATABASE_URL,
  EXPO_FIREBASE_API_KEY,
  EXPO_FIREBASE_DOMAIN_URI,
  EXPO_FIREBASE_URL_PREFIX,
} from '@env';
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
  databaseURL: EXPO_FIREBASE_DATABASE_URL,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.setLogLevel('silent');
}

const reference = (uuid) => {
  return firebase.database().ref(`customPlays/${uuid}`);
};

export const upload = async (play) => {
  const shareUuid = generateUuid();
  await reference(shareUuid).set(play);
  return shareUuid;
};

export const download = (uuid) => {
  return reference(uuid)
    .once('value')
    .then((snapshot) => snapshot.val());
};

export const createLink = (path) => {
  if (__DEV__) {
    return Linking.makeUrl(path);
  } else {
    return fetch(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${EXPO_FIREBASE_API_KEY}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: EXPO_FIREBASE_DOMAIN_URI,
          link: `${EXPO_FIREBASE_URL_PREFIX}/${path}`,
          androidInfo: {
            androidPackageName: 'com.discin.discin',
            androidMinPackageVersionCode: '4',
          },
          iosInfo: {
            iosBundleId: 'com.discin.discin',
            iosCustomScheme: 'discin',
            iosAppStoreId: '1537387830',
          },
          desktopInfo: {
            desktopFallbackLink: 'https://play.google.com/store/apps/details?id=com.discin.discin',
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => responseJson.shortLink)
      .catch((error) => {
        console.error(error);
      });
  }
};
