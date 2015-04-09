'use strict';

/**
 * @ngdoc service
 * @name webappApp.gameResult
 * @description
 * # gameResult
 * Factory in the webappApp.
 */
angular.module('slot')
  .factory('gameResult', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
