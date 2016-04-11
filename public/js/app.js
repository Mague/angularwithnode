/**
* administracion Module
*
* Description
*/
var app=angular.module('administracion', ['ngRoute','satellizer'])


app.controller('global', ['$scope', function ($scope) {
	$logeado=false;
}])

app.controller('home',['$http','$auth','$location', function ($http,$auth,$location) {
	this.submit=function(){
		var vm = this;
		console.log("Antes de enviar")
	    	console.log("enviando")
	        $auth.login({
	            user: vm.user,
	            pass: vm.pass
	        })
	        .then(function(){
	            // Si se ha logueado correctamente, lo tratamos aquí.
	            // Podemos también redirigirle a una ruta
	            $location.path("/private")
	        })
	        .catch(function (res){
	            console.log(res)
	        });
	    
		/*var ajax=$http.post('#/login', data);
		ajax.success(function(res){
			console.log(res)
		})/*/
	}
}])



app.config(['$authProvider',function($authProvider){
	$authProvider.loginUrl = "http://localhost/login";
    $authProvider.signupUrl = "http://localhost/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "myApp";
}])

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'home'
	})
	.when('/login/',{
		controller:'login'
	})
}])

function LoginController($auth /*, $location*/) {
	console.log("LoginController")
    var vm = this;
    this.login = function(){
        $auth.login({
            email: vm.email,
            password: vm.password
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            //$location.path("/private")
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
        });
    }
}