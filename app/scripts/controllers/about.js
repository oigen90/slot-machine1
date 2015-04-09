'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('AboutCtrl', function ($scope, runningStatus) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isRunning = function() {
        return runningStatus.get();
    };
    $scope.runMachines = function() {
        runningStatus.set(true);
    };
    $scope.stopMachines = function() {
        runningStatus.set(false);
    };
    $scope.toggleMachines = function() {
        runningStatus.set(!$scope.isRunning());
    };
  });
