'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.PepperALTextToSpeech
 * @description
 * # PepperALTextToSpeech
 * Factory in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .factory('PepperALTextToSpeech', function (qiSession) {
    return {
      say: function (text) {
        qiSession.service('ALTextToSpeech')
          .then(function (ALTextToSpeech) {
            return ALTextToSpeech.say(text);
          })
          .fail(function (error) {
            console.log(error);
          });
      }
    };
  });
