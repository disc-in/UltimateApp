const fetch = require('node-fetch');

if (!global.fetch) {
  global.fetch = fetch;
}
