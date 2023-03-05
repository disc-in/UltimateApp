// Comes from https://github.com/firebase/firebase-js-sdk/issues/6747#issuecomment-1343566346
// This is hell, this is javascript
module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  return options.defaultResolver(path, {
    ...options,
    conditions: ['node'].concat(options.conditions),
  });
};
