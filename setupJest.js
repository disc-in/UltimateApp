const fetch = require('node-fetch');

if (!global.fetch) {
  global.fetch = fetch;
}

global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('expo-constants', () => {
  const Constants = jest.requireActual('expo-constants');
  const appConfig = jest.requireActual('./app.config.js');
  return {
    ...Constants,
    manifest: {
      ...Constants.manifest,
      extra: { ...Constants.manifest?.extra, ...appConfig.default.expo.extra },
    },
  };
});
