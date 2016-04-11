var env = process.env.NOVE_ENV || 'production',
	express = require('express'),
	path=require('path')

var AppServer=function(config){
	config = config || {}
	this.appServer = express()
	
	this.appServer.use(express.static(path.join(__dirname,'../public')))

	this.appServer.get('/',function(req,res){
		res.sendFile("index.html");
	});
	this.appServer.post('/login',function(req,res){
		console.log("Peticion recibida")
		res.json({user:"mague"})
	})

	this.appServer.listen(3000,function(){
		console.log("Correiendo");
	})
	if(env == 'development'){
		this.appServer.set('view cache', false)
	}
}

module.exports = AppServer
