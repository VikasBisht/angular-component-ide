define(['angular'],function(angular){
	angular.module('app.config')
		.factory('loginService',['$q','$http','$localStorage',function($q,$http,$localStorage){
		var defer = $q.defer();
		 var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(username, password, callback) { 
            $http.post('/api/authenticate', { username: username, password: password })
                .then(function (response) { 
                	
                    // login successful if there's a token in the response
                    if (response.data.token) { 
                        // store username and token in local storage to keep user logged in between page refreshes
                        $localStorage.currentUser = { username: username, token: response.data.token };

                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                        // execute callback with true to indicate successful login
                        callback(true);
                    } else {
                        // execute callback with false to indicate failed login
                        callback(false);
                    }
                },function(response){
                	console.log(response)
                });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
}]);
});