const fetch = require('node-fetch');

if (!global.fetch) {
  global.fetch = fetch;
}

global.__reanimatedWorkletInit = jest.fn();
