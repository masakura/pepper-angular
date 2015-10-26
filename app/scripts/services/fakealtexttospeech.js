'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.FakeALTextToSpeech
 * @description
 * # FakeALTextToSpeech
 * Factory in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .factory('FakeALTextToSpeech', function ($q) {
    return {
      say: function (text) {
        var defer = $q.defer();
        console.log(text);
        defer.resolve();
        return defer.promise;
      }
    };
  });
