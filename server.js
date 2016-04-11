var http = require('http'),
	config = require('./config'),
	AppServer = require('./app/')

var app= new AppServer()
var server = http.createServer(app.appServer)
server.listen(config.port,function(){
	console.log("http://localhost")
})
