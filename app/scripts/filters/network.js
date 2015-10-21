'use strict';

/**
 * @ngdoc filter
 * @name pepperAngularApp.filter:network
 * @function
 * @description
 * # network
 * Filter in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .filter('network', function (pepperService) {
    if (pepperService.native) {
      return function (input) {
        return 'http://masakura.github.io/pepper-angular/' + input;
      };
    }
    return function (input) {
      return input;
    };
  });
