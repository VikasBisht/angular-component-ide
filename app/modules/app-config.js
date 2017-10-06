define(['angular'],function(angular){

	var module = angular.module('app.config',[]);

	module.config(['$controllerProvider','$provide',function($controllerProvider,$provide){
		module._controller = module.controller;
		module.controller = function(name,constructor){
			$controllerProvider.register(name,constructor);
		}

		module.factory = function(name,constructor){
			$provide.factory(name,constructor);
			return this;	
		}

	}]);

return module;
	
})