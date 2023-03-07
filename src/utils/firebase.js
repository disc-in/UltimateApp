import { Platform, InteractionManager } from 'react-native';
import Constants from 'expo-constants';
import { initializeApp, setLogLevel } from 'firebase/app';
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
  databaseURL: Constants.expoConfig.extra.firebaseDatabaseUrl,
};

const app = initializeApp(firebaseConfig);
setLogLevel('silent');

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
  return onValue(reference(namespace, uuid), (snapshot) => snapshot.val());
};
