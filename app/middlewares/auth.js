var jwt = require('jwt-simple'),
	moment = require('moment'),
	config = require('../utils/config')

module.exports = function(req, res, next) {
	console.log("Se llamo")
	if(!req.headers.authorization) {
		console.log("no estas autorizado")
	    return res
	    	.status(403)
	    	.send({message: "Tu petición no tiene cabecera de autorización"});
	}

  	var token = req.headers.authorization.split(" ")[1];
  	var payload = jwt.decode(token, config.TOKEN_SECRET);

  	if(payload.exp <= moment().unix()) {
		console.log("El token ha expirado")
  		
     	return res
         	.status(401)
        	.send({message: "El token ha expirado"});
  	}

  	req.user = payload.sub;
  	next();
}