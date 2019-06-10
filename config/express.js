const bodyParser=require('body-parser');
const compression=require('compression');
const express=require('express');
const morgan=require('morgan');
const config=require('./config');
const methodOverride=require('method-override');

module.exports=function(){
    var app =express();

    switch (process.env.NODE_ENV) {
        case 'development':
            app.use(morgan('dev'));
            break;
        case 'production':
                // Ensure log directory exists
	  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

	  // Create a rotating write stream
	  var accessLogStream = fileStreamRotator.getStream({
		  date_format: 'YYYY-MM-DD',
		  filename: logDirectory + '/access-%DATE%.log',
		  frecuency: 'daily',
		  verbose: false
	  });

	  app.use(morgan('common', {stream: accessLogStream}));
            break;
    
        default:
            break;
    }

    // Compress the response data using gzip/deflate
  var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
    }
  }

   // Use the 'body-parser' middleware functions
   app.use(bodyParser.urlencoded({
    extended: true,
    verify: rawBodySaver, 
    extended: true
  }));
  app.use(bodyParser.json({limit: '50mb',verify: rawBodySaver}));
  
  app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true } }));
  // Handle no valid JSON
  app.use(function(err, req, res, next) {
    res.status(400).send({
      success: false,
      message: 'JSON no válido',
      err: err
    });
  });
  app.use(compression());
  // Use the 'method-override' middleware functions
  app.use(methodOverride());

  // Configure the app to handle CORS requests
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
      'X-Requested-With, Content-Type, Authorization');

    next();
  });

}