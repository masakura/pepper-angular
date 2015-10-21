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
      var image = $window.location.pathname.indexOf('lastUploadedChoregrapheBehavior') >= 0 ?
            'http://masakura.github.io/pepper-angular/' + input :
            input;

      return image;
    };
  });
