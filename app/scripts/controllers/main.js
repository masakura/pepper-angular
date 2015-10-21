'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('MainCtrl', function (qiSession, cookService) {
    this.cooks = cookService.get();

    this.click = function () {
      qiSession.service("ALMemory").done(function (ALMemory) {
        console.log("ALMemory取得成功");
        ALMemory.raiseEvent("PepperQiMessaging/fromtablet", "押すなっていったじゃん!");
      });
    };
  });
