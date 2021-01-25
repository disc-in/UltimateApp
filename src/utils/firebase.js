import firebase from 'firebase/app';
import 'firebase/database';
import { Platform, InteractionManager } from 'react-native';
import * as Linking from 'expo-linking';

import { EXPO_FIREBASE_DATABASE_URL } from '@env';
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
    return (url =
      'https://discinultimate.page.link/?' +
      `link=https://discin.ultimate.com//${path}&` +
      'apn=com.discin.discin&amv=5&' +
      'ibi=com.discin.discin&imv=1.1.0&ius=discin&isi=1537387830&' +
      'ofl=https://play.google.com/store/apps/details?id=com.discin.discin');
  }
};
