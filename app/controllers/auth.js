var service=require('../utils/services')
var routes=function(){
	this.login=function(req,res){
		console.log(req.body.user)
		console.log(req.body.pass)
		if(req.body.user=="mague"){
			user={
				id:'mague'
			}
			res.status(200).send({token: service.createToken(user)})
		}else{
			return res
		      .status(403)
		      .send({message: "Tu petición no tiene cabecera de autorización"});
		}
	}
}


module.exports = new routes()