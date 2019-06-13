const servicesPhat=require('../../config/config');
const urlServices=servicesPhat.phatServices+'hello/';
const controller=require(servicesPhat.controllerFile+'hello'+servicesPhat.controllerTermino);
//var crud = require(servicesPhat.controllerFile+ 'crud' +servicesPhat.controllerTermino);
var tools = require(servicesPhat.controllerFile+ 'tools' +servicesPhat.controllerTermino);


module.exports=function(app){

    app.route(urlServices)
    .get(controller.hello);
};