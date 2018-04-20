Package.describe({
  name   : 'happyuc:elements',
  summary: 'Basic elements for Dapps',
  version: '1.1.8',
  git    : 'http://github.com/happyuc-project/meteor-package-elements',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.use('templating', 'client');
  api.use('reactive-var', 'client');
  api.use('less', 'client');
  api.use('standard-minifiers', 'client');
  api.use('alexvandesande:identicon@2.0.2', 'client');
  api.use('3stack:bignumber@4.0.2', 'client');
  api.use('frozeman:animation-helper@0.2.5', 'client');
  api.use('frozeman:storage@0.1.8', 'client');
  api.use('frozeman:template-var@1.2.2', 'client');
  api.use('happyuc:webu@1.0.5', 'client');
  api.use('happyuc:tools@1.1.3', 'client');

  // provide packages for the app developer as well
  api.imply(['frozeman:template-var', 'happyuc:tools'], 'client');

  api.export(['HucElements'], 'client');

  api.addAssets('identicon-load.gif', 'client');

  api.addFiles('lib/lesshat.import.less', 'client');
  api.addFiles('containers.import.less', 'client');
  api.addFiles('elements.import.less', 'client');
  api.addFiles('main.less', 'client');
  api.addFiles('elements.js', 'client');
  api.addFiles('identicon.html', 'client');
  api.addFiles('identicon.js', 'client');
  api.addFiles('addressInput.html', 'client');
  api.addFiles('addressInput.js', 'client');
  api.addFiles('dataTextarea.html', 'client');
  api.addFiles('dataTextarea.js', 'client');
  api.addFiles('selectAccount.html', 'client');
  api.addFiles('selectAccount.js', 'client');
  api.addFiles('selectGasPrice.html', 'client');
  api.addFiles('selectGasPrice.js', 'client');
  api.addFiles('modal.html', 'client');
  api.addFiles('modal.js', 'client');
  api.addFiles('modalQuestion.html', 'client');
  api.addFiles('modalQuestion.js', 'client');
  api.addFiles('output.html', 'client');
  api.addFiles('output.js', 'client');
  api.addFiles('lib/hqx.js', 'client');
});
