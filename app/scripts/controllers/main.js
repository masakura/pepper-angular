'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('MainCtrl', function (cookService, ALTextToSpeech) {
    ALTextToSpeech.say('どの料理を作る?');

    this.cooks = cookService.all();
  });
