'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:CookbookCtrl
 * @description
 * # CookbookCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('CookbookCtrl', function ($routeParams, cookService, messageService) {
    this.cook = cookService.get($routeParams.id);

    this.start = function (direction) {
      messageService.send(direction.message);
    }
  });
