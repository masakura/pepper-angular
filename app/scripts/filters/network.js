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
  .filter('network', function ($window) {
    return function (input) {
      if ($window.location.protocol === 'file:') {
        return 'http://masakura.github.io/pepper-angular/' + input;
      }
      return input;
    };
  });
