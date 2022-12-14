// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmi ne Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/test'),
      reports: ['html', 'lcovonly', 'text-summary'],
      combineBrowserReports: true,
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 70,
          lines: 70,
          branches: 70,
          functions: 70
        },
        // thresholds per file
        each: {
          statements: 70,
          lines: 70,
          branches: 70,
          functions: 70,
        }
      },
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
