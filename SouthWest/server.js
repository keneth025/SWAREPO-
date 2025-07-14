const RestProxy = require('sp-rest-proxy');

const settings = {
  configPath: './sp-rest-server/sp-proxy-config.json', // Location for SharePoint instance mapping and credentials
  port: 8080,                           // Local server port
  staticRoot: './static',                // Root folder for static content
  rawBodyLimitSize: '1gb'
};

const restProxy = new RestProxy(settings);
restProxy.serve();
