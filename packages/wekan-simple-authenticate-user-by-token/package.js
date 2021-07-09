Package.describe({
  name: 'wekan-simple-authenticate-user-by-token',
  version: '1.0.1',

  // Brief, one-line summary of the package.
  summary: 'Authenticate user via auth token',

  // URL to the Git repository containing the source code for this package.
  git: '',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use([
    'accounts-base@2.0.0',
    'wekan-simple-json-routes@2.1.0',
  ], 'server');

  api.addFiles('auth.js', 'server');
});

// Tests in rest-accounts-password, to avoid circular dependency
