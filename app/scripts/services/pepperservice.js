'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.pepperService
 * @description
 * # pepperService
 * Service in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .service('pepperService', function ($window) {
    return {
      native: $window.location.pathname.indexOf('lastUploadedChoregrapheBehavior') >= 0
    };
  });
