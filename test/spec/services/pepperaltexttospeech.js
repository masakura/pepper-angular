'use strict';

describe('Service: PepperALTextToSpeech', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var PepperALTextToSpeech;
  beforeEach(inject(function (_PepperALTextToSpeech_) {
    PepperALTextToSpeech = _PepperALTextToSpeech_;
  }));

  it('should do something', function () {
    expect(!!PepperALTextToSpeech).toBe(true);
  });

});
