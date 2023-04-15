const path = require('path');

module.exports = function override(config) {
  // add fallback for 'path' module
  config.resolve.fallback = { "path": require.resolve("path-browserify") };

  return config;
}
