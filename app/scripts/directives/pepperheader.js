'use strict';

/**
 * @ngdoc directive
 * @name pepperAngularApp.directive:pepperHeader
 * @description
 * # pepperHeader
 */
angular.module('pepperAngularApp')
  .directive('pepperHeader', function () {
    return {
      templateUrl: 'views/pepperheader.html',
      restrict: 'E',
      scope: {}
    };
  });
