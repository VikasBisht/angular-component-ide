'use strict';
/**
* This file sets up the basic module libraries you'll need
* for your application.
*/
requirejs.onError = function(err) {
    //console.log(err.requireType);
    if (err.requireType === 'timeout') {
        //console.error('modules: ' + err.requireModules);
    }
    throw err;
};
/**
* RequireJS Config
* This is configuration for the entire application.
*/
require.config({
	baseUrl:'',
	paths : {
		 'jquery': 'bower_component/jquery/dist/jquery.min',
		"angular":"bower_component/angular/angular.min",
		"angular-ui-router" : "bower_component/angular-ui-router/release/angular-ui-router.min",
		"app" : "./app",
		 'bootstrap': 'bower_component/bootstrap/dist/js/bootstrap.min',
		"routes":"modules/routes",
		'angular-sanitize': 'bower_component/angular-sanitize/angular-sanitize',
		'ng-storge':'bower_component/ngstorage/ngStorage.min',
		'config':'./config',
		'app-config':'modules/app-config',
		'login-ctrl':'login/login-controller',
		'home-ctrl':'home/home-controller',
		'login-service': 'login/login-service',
		 /* controller */

		 "":"",

		 /* service */
		 "":"",

		 /* Directive */
		 "":""
	},
	    priority: [
        'jquery',
        'angular',
        'angular-ui-router'
    ],
	 shim: {
	 	  'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
         'angular-ui-router': ['angular'],
        'app':{
        	deps:['routes','app-config']
        }
    }
});



