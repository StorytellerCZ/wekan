Package.describe({
  name: 'wekan-3stack-presence',
  version: '1.1.2',
  summary: 'Track who\' online on your app, and what they\'re up to',
  git: 'https://github.com/3stack-software/meteor-presence',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.export([
    'Presence',
    'presences'
  ]);

  api.use([
    'coffeescript',
    'underscore',
    'check',
    'mongo',
    'ddp',
    'accounts-base@2.0.0'
  ]);
  api.use('tracker', 'client');
  api.use([
    'random'
  ], 'server');

  api.addFiles(['lib/collection.coffee', 'lib/heartbeat.coffee']);
  api.addFiles(['lib/client/monitor.coffee', 'lib/client/presence.coffee'], 'client');
  api.addFiles(['lib/server/monitor.coffee', 'lib/server/presence.coffee'], 'server');
});
