var app = angular.module('hano', ['FindRw.services']);

app.controller('testController', function($scope) {

 ///// This is the testCtrl ///// 
		    
		      $scope.check = function() {
		      	if($scope.pw != $scope.pw0) {
		      		$scope.isMatch = true; 
		      	} else {
		      		$scope.isMatch = false;
		      	}
		      }

 ///// This is the testCtrl /////

});