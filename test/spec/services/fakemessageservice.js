'use strict';

describe('Service: fakeMessageService', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var fakeMessageService;
  beforeEach(inject(function (_fakeMessageService_) {
    fakeMessageService = _fakeMessageService_;
  }));

  it('should do something', function () {
    expect(!!fakeMessageService).toBe(true);
  });

});
