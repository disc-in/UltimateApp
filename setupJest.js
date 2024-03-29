global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('expo-constants', () => {
  const Constants = jest.requireActual('expo-constants');
  const appConfig = jest.requireActual('./app.config.js');
  return {
    ...Constants,
    expoConfig: {
      ...Constants.expoConfig,
      extra: { ...Constants.expoConfig?.extra, ...appConfig.default.expo.extra },
    },
  };
});

// Font issue with expo 48: https://github.com/expo/expo/issues/21434
jest.mock('expo-font');
jest.mock('expo-asset');
