'use strict';

describe('Service: FakeALTextToSpeech', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var FakeALTextToSpeech;
  beforeEach(inject(function (_FakeALTextToSpeech_) {
    FakeALTextToSpeech = _FakeALTextToSpeech_;
  }));

  it('should do something', function () {
    expect(!!FakeALTextToSpeech).toBe(true);
  });

});
