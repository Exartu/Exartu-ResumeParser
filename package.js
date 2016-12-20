Package.describe({
  summary: "Parse a document",
  name: 'aida:resume-parser',
  version: '0.0.18',
  documentation: null
});

Npm.depends({
  'combined-stream': "0.0.4",
  'util': "0.10.3",
  //'path'
  //'http'
  //'https'
  'url': "0.7.9",
  'mime': "1.2.11",
  'async': "0.6.2"
});


Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('underscore@1.0.3', 'server');
  api.addFiles('lib/node-form-data/lib/form_data.js', 'server');  
  api.addFiles('main.js', 'server');
  api.export("ResumeParser", 'server');
});
