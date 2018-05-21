/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'admin-section',

  lazyLoading: {
    // when `true` and restarting the server it fails to parse the queryParams
    // of `foo` route inside of the engine
    enabled: true
  },

  isDevelopingAddon() {
    return true;
  }
});
