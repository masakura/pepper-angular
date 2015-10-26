'use strict';

describe('Service: ALTextToSpeech', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var ALTextToSpeech;
  beforeEach(inject(function (_ALTextToSpeech_) {
    ALTextToSpeech = _ALTextToSpeech_;
  }));

  it('should do something', function () {
    expect(!!ALTextToSpeech).toBe(true);
  });

});
