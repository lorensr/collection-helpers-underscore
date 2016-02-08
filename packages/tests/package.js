Package.describe({
  name: 'tests',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('accounts-base');
  api.use('underscore');
  api.use('dburles:collection-helpers@1.0.0');
  api.addFiles('tests.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tests');
  api.addFiles('tests-tests.js');
});
