'use strict';

var session = new QiSession();

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
      console.log(session);

      session.service("ALMemory").done(function (ALMemory) {
        console.log("ALMemory取得成功");
        ALMemory.raiseEvent("PepperQiMessaging/fromtablet", "押したね");
      });
    };
  });
