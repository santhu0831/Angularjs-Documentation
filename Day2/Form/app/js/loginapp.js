var app = angular.module('app', [])





app.controller('formController', function ($scope) {
	
	var name="$scope.user.password";
	var first="$scope.user.password";
	console.log("efore");
	$scope.user={};
	console.log("after");

	if (name==first){
		console.log("Password match")
		$scope.match="Password match";
	}
	else
	{
		$scope.match="Password Mis match"
		console.log("Not equal");
	}
	$scope.reset = function() {
		console.log("Reseting the form");
		$scope.user = angular.copy($scope.master);
	};


		
	$scope.submit = function($http){		
		// Writing it to the server
		//		

		console.log("santosh");
		var dataObj = {
				firstname : $scope.firstName,
                lastname  : $scope.lastName,
		};	

		console.log("mahesh");
		var res = $http.post('/savecompany_json', dataObj); console.log("ramya");
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		// Making the fields empty
		//
		$scope.firstname='';
		$scope.lastname='';
		
	};





})
