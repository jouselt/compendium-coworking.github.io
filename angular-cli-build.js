/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'ng2-bootstrap/ng2-bootstrap.js',
      'ng2-bootstrap/components/**/*.+(js|js.map)',
      'moment/moment.js',
      'jquery/dist/jquery.js',
      'wowjs/dist/wow.min.js',
      'bootstrap/dist/**/bootstrap.min.+(js|css|css.map)',
      'font-awesome/css/font-awesome.min.css',
      'font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)'
    ]
  });
};
