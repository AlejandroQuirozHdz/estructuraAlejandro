process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express=require('./config/express');
const http=require('http');

var app=express();

http.createServer(app,(request,response)=>{
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
 response.json({
     code:200
 });
    // 2. Write the announced text to the body of the page
   
    response.end();
}).listen(7878 ,()=> console.log('Server on port 7878'));

module.exports = app;