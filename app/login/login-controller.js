define(['angular','login-service'],function(angular){ 
	angular.module('app.config')
		.controller('loginCtrl',loginCtrl);

		loginCtrl.$inject = ['$scope','loginService','loginService','$location'];

		function loginCtrl($scope,loginService,loginService,$location){
			$scope.msg ="login controller";
		 // loginService.greet().then(function(response){
		 // 		$scope.serveMsg = response;
			// })
			initController();

	        function initController() {
	            // reset login status
	            loginService.Logout();
	        };

			$scope.login  = login;

			function login() {
				$scope.loading = true;
				  loginService.Login($scope.username, $scope.password, function (result) {
		                if (result === true) {
		                    $location.path('/');
		                } else {
		                    $scope.error = 'Username or password is incorrect';
		                    $scope.loading = false;
		                }
            });
			}

		}

	});