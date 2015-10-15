'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('MainCtrl', function () {
    this.click = function () {
      console.log(window.location);
      console.log(QiSession);
    };
  });
