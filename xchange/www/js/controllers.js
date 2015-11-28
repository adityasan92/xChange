angular.module('appControllers',[])
.controller('loginCtrl', function($scope,$cordovaOauth,$rootScope,$state,ngFB){
	
	$scope.loginFB = function(){
		/*$cordovaOauth.facebook("1436797079962140",["email"]).then(function(data){
			console.log(data);
			$rootScope.loginData = data;
			$state.go('home');
		},function(error){
			console.log(error);
		});*/

		ngFB.login({scope: 'email'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                //$scope.closeLogin();
                console.log(response);
                $state.go('home');
            } else {
                alert('Facebook login failed');
            }
        });
 	}

}).controller('homeCtrl',function($scope,$rootScope){


});


