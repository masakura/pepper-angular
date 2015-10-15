'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.qiSession
 * @description
 * # qiSession
 * Factory in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .factory('qiSession', function () {
    return window.QiSession ? new QiSession() : false;
  });
