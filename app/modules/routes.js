define(['angular','angular-ui-router'], function (angular) {
'use strict';

	return  angular.module('app.routes',['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		    $urlRouterProvider.otherwise('/');
		      $stateProvider
		        .state('login', {
		            url: '/login',
		            templateUrl: './login/login.html',
		            controller: 'loginCtrl',
		            resolve:{
		            	load: function($q){
		            		var defer = $q.defer();
		            		require(['login-ctrl'],function(){
		            			defer.resolve();
		            		},function(){
		            			defer.reject();
		            		});
		            			return defer.promise;
		            	}
		            	
		            }
		                   
		         
		        })
		        .state('/', {
		            url: '/',
		            templateUrl: './home/home.html',
		            controller: 'HomeCtrl',
		            resolve:{
		            	load: function($q){
		            		var defer = $q.defer();
		            		require(['home-ctrl'],function(){
		            			defer.resolve();
		            		},function(){
		            			defer.reject();
		            		});
		            			return defer.promise;
		            	}
		            	
		            }
		                   
		         
		        });


		    
		}]);

});