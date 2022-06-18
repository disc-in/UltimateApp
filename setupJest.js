const fetch = require('node-fetch');

if (!global.fetch) {
  global.fetch = fetch;
}

global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
