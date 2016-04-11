var service=require('../utils/services')
var routes=function(){
	this.login=function(req,res){
		user={
			id:'mague'
		}
		res.status(200).send({token: service.createToken(user)})
	}
}


module.exports = new routes()