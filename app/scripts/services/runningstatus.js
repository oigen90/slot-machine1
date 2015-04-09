'use strict';

/**
 * @ngdoc service
 * @name webappApp.runningStatus
 * @description
 * # runningStatus
 * Factory in the webappApp.
 */
angular.module('slot')
  .factory('runningStatus', function () {

    var isRunning = false;

    return {
      get: function () {
        return isRunning;
      },
      set: function(val) {
        return isRunning = !!val;
      }
    };
  });
