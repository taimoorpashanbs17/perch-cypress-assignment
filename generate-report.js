const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: 'cypress/reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'MacBook Pro M1',
    platform: {
      name: 'macOS',
      version: 'Monterey'
    }
  },
});
