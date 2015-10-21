'use strict';

describe('Service: pepperService', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var pepperService;
  beforeEach(inject(function (_pepperService_) {
    pepperService = _pepperService_;
  }));

  it('should do something', function () {
    expect(!!pepperService).toBe(true);
  });

});
