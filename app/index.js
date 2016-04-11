var env = process.env.NOVE_ENV || 'production',
	express = require('express'),
	path=require('path')
var routes = require('./controllers/auth')
var middlewares = require('./middlewares')
var AppServer=function(config){
	config = config || {}
	this.appServer = express()
	
	this.appServer.use(express.static(path.join(__dirname,'../public')))
	for(var middleware in middlewares){
		this.appServer.use(middlewares[middleware])
	}
	this.appServer.get('/',function(req,res){
		res.sendFile("index.html");
	});
	this.appServer.post('/login',function(req,res){
		console.log("Peticion recibida")
		res.json({user:"mague"})
	})
	this.appServer.get('/login',routes.login)
	this.appServer.listen(3000,function(){
		console.log("Corriendo");
	})
	if(env == 'development'){
		this.appServer.set('view cache', false)
	}
}

module.exports = AppServer
