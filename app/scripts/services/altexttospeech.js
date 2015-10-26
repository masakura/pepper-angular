'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.ALTextToSpeech
 * @description
 * # ALTextToSpeech
 * Factory in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .factory('ALTextToSpeech', function (pepperService, PepperALTextToSpeech, FakeALTextToSpeech) {
    return pepperService.native ?
      PepperALTextToSpeech : FakeALTextToSpeech;
  });
