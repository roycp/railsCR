exports.config = {

  specs: [
    'e2e/**/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
