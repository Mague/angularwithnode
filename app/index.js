var env = process.env.NOVE_ENV || 'production',
	express = require('express'),
	path=require('path'),
	bodyParser=require('body-parser')

var routes = require('./controllers/auth')
var middlewares = require('./middlewares')
var AppServer=function(config){
	config = config || {}
	this.appServer = express()
	
	this.appServer.use(bodyParser.json()); // for parsing application/json
	this.appServer.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

	this.appServer.use(express.static(path.join(__dirname,'../public')))
	/*for(var middleware in middlewares){
		this.appServer.use(middlewares[middleware])
	}*/2
	this.appServer.get('/',function(req,res){
		res.sendFile("index.html");
	});
	this.appServer.post('/login',routes.login)
	this.appServer.listen(3000,function(){
		console.log("Express server up");
	})
	if(env == 'development'){
		this.appServer.set('view cache', false)
	}
}

module.exports = AppServer
