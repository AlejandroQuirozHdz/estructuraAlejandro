const servicesPhat=require('../../config/config');
var tools = require(servicesPhat.controllerFile+ 'tools' +servicesPhat.controllerTermino);

exports.hello=function(req,res,next){
    return res.status(200).json(tools.respons(true,200,'Hola alejandro'));
    
}