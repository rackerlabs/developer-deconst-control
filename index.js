var deconstControl = require('deconst-control');
module.exports = new deconstControl.Site({
  baseDir: __dirname,
  domain: 'developer.rackspace.com',
  protocol: 'https'
});
