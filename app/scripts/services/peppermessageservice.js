'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.pepperMessageService
 * @description
 * # pepperMessageService
 * Service in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .service('pepperMessageService', function (qiSession) {
    return {
      send: function (message) {
        return qiSession.service('ALMemory')
          .then(function (ALMemory) {
            console.log('ALMemory取得成功');
            ALMemory.raiseEvent('PepperQiMessaging/fromtablet', message);
          });
      }
    };
  });
