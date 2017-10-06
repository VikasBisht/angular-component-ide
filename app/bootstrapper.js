
	require(['config'],function(){
			
			require(['angular','app'],function(angular,main_module){
				angular.element(document).ready(function(){
					angular.bootstrap(document,[main_module.name]);
				});
	
			});
		});
