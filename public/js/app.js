/**
* administracion Module
*
* Description
*/
var app=angular.module('administracion', ['ngRoute'])

app.controller('global', ['$scope', function ($scope) {
	$logeado=false;
}])

app.controller('home',['$http', function ($http) {
	this.submit=function(){
		user=this.user;
		pass=this.pass;
		data={
			user:user,
			pass:pass
		}
		var ajax=$http.post('/login', data);
		ajax.success(function(res){
			console.log(res)
		})
	}
}])
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'home'
	})
}])