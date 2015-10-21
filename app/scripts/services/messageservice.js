'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.messageService
 * @description
 * # messageService
 * Service in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .service('messageService', function (pepperService, pepperMessageService, fakeMessageService) {
    return pepperService.native ?
      pepperMessageService : fakeMessageService;
  });
