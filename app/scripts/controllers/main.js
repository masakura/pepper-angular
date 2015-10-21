'use strict';

/**
 * @ngdoc function
 * @name pepperAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pepperAngularApp
 */
angular.module('pepperAngularApp')
  .controller('MainCtrl', function ($window, qiSession) {
    this.cooks = [
      {
        id: 'cook0001',
        name: 'だんぼ',
        image: 'images/image-01.jpg'
      }, {
        id: 'cook0002',
        name: '串揚げ',
        image: 'images/image-02.jpg'
      },
    ];

    this.click = function () {
      qiSession.service("ALMemory").done(function (ALMemory) {
        console.log("ALMemory取得成功");
        ALMemory.raiseEvent("PepperQiMessaging/fromtablet", "押すなっていったじゃん!");
      });
    };

    this.reload = function () {
      $window.location.reload();
    };
  });
