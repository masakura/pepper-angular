'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:CookbookCtrl
 * @description
 * # CookbookCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('CookbookCtrl', function ($routeParams, cookService, messageService, ALTextToSpeech) {
    ALTextToSpeech.say('作り方を押してね!');

    this.cook = cookService.get($routeParams.id);

    this.start = function (direction, $event) {
      messageService.send(direction.message);

      $event.stopPropagation();
    };
  });
