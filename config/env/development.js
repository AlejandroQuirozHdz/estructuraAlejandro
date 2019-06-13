// Use 'strict' JavaScript mode
'use strict';

// Set the 'development' enviroment configuration object
module.exports = {
    phatServices:'/api/services/',
    routesFile:'../app/routers/',
    controllerFile:'../../app/controllers/',
    controllerTermino:'.server.controller',
    aes_iv: 'passwordpassword',
    aes_key: 'passwordpassword',
    db: 'mongodb://praxisdb:LMsXc2mfABB0@13.66.20.159:27017/vacunaccion-cev',
    secret: 'secret_key',
    tokenExpirationTime: 6000
  
  };