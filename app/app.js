// Creating module with name cordovaApp
var scotchApp = angular.module('cordovaApp', []);

// creating the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope){

	// creating  message to display in our view
	$scope.message = 'Excited to build hybrid app';

	//Function to capture image 
	$scope.captureImage = function() {
		$scope.message = "Button Clicked";
	};
});