'use strict';

describe('Service: cookService', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var cookService;
  beforeEach(inject(function (_cookService_) {
    cookService = _cookService_;
  }));

  it('should do something', function () {
    expect(!!cookService).toBe(true);
  });

});
