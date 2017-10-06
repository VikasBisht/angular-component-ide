define(['jquery','angular','angular-sanitize','ng-storge','routes','app-config'],function($,angular){
'use strict';
	
	
	var  main_module =  angular.module('app',['app.routes','ngSanitize','app.config', 'ngStorage']).run(run)

	main_module.controller('main-controller',['$rootScope',function($rootScope,){
		$rootScope.app ="application parent controller";

	}]);
	
	function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }
	return main_module;
	
})