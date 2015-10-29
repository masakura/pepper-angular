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
    ALTextToSpeech.say( '今日のお勧めはこのメニューはこれです！');

    this.cooks = cookService.all();
  });
