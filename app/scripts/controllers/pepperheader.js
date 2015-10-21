'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:PepperheaderCtrl
 * @description
 * # PepperheaderCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('PepperHeaderCtrl', function ($window) {
    this.reload = function () {
      $window.location.reload();
    };
  });
