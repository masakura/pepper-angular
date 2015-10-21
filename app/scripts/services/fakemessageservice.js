'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.fakeMessageService
 * @description
 * # fakeMessageService
 * Service in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .service('fakeMessageService', function ($log) {
    return {
      send: function (message) {
        $log.log(message);
      }
    };
  });
