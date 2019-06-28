const servicesPhat=require('../../config/config');
var tools = require(servicesPhat.controllerFile+ 'tools' +servicesPhat.controllerTermino);
const Request = require("request");



exports.hello=function(req,res,next){
    return res.status(200).json(tools.respons(true,200,'Hola alejandro'));
    
};

let promesaPeticion =new Promise((res,rej)=>{
    Request.get({
        "headers": {
            "content-type": "application/json",
            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzY1ZTFjMzcwMzFmNmM3ZTM0ZWFmNyIsInJvbCI6MywiaWF0IjoxNTYxNDc1NDM3fQ.jLNIuiezEsox-RCZFSWsgTEwOKcy-egH_BYeyNmQjx4"
        },

        "url": "https://13.85.74.15/api/v1/catestadoinegis",
        strictSSL: false
    }, (error, response, body) => {
        if(error){
            rej(new Error(error));
        }else{
       let respuesta=JSON.parse(body);
        res(respuesta);
        }
    });
});

exports.examplePromesa=async (req,res,next)=>{
    
    return promesaPeticion.then((body)=>{
                            res.status(200).json({
                                success: true,
                                code: 200,
                                data: body.data})
            },(error)=>{
                                res.status(400).json({
                                    success: true,
                                    code: 400,
                                    data: error})
                                });
};



    