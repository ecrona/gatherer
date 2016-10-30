var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'test/**/*.spec.ts',
      'test/**/*.spec.tsx'
    ],
    exclude: [],
    plugins: ['karma-*'],
    preprocessors: {
      'test/**/*.ts': ['webpack'],
      'test/**/*.tsx': ['webpack']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  });
}
