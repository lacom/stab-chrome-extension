/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('slackerScreen')
	.controller('AuthCtrl', function AuthCtrl($scope, $routeParams, $filter) {
		'use strict';

		$scope.userCredentials = {};
	  $scope.doLogin = function() {
	  	console.log($scope.userCredentials);
	    var credentials = $scope.userCredentials;
	  //   // Simple POST request example (passing data) :
			// $http.post('http://localhost:3000/api/v1/auth', credentials).
			//   success(function(data, status, headers, config) {
			// 		console.log('Success!');
			//   }).
			//   error(function(data, status, headers, config) {
			//     console.log('FAIL!');
			//   });
  	};
	});