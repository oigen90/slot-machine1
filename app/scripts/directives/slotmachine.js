'use strict';

/**
 * @ngdoc directive
 * @name slot.directive:slotMachine
 * @description
 * # slotMachine
 */
angular.module('slot', [])
  .directive('slotMachine', function ($timeout, runningStatus) {
    return {
      restrict: 'E',
      scope: {
        active: '=',
        delay: '=',
        auto: '=',
        stopHidden: '=',
        randomize: '=',
        isRunning: '='
      },
      template: '<div ng-repeat="i in getNumber(slotsNumber) track by $index" class="slot slot{{$index+1}}"></div>',
      link: function postLink(scope, element, attrs) {
        scope.slotsNumber = 6;
        scope.getNumber = function(num) {
          return new Array(num);   
        };

        scope.startShuffle = function() {
          var timeDelay = element.index() * 500;
          $timeout(function() {
            machine.shuffle(5, function() {
              // scope.$parent.isRunning = false;
              runningStatus.set(0);
              console.log('Finished');
            });
          }, timeDelay);
        };

        var machine;
        $timeout(function () {
          machine = element.slotMachine({
            active: ~~scope.active,
            delay : ~~scope.delay
          });
        });

        scope.$watch('isRunning', function (newVal, oldVal) {
            if (!newVal) return;

            console.log(newVal);
            scope.startShuffle();
        });
      }
    };
  });
