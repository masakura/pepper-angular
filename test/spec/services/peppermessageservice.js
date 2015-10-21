'use strict';

describe('Service: pepperMessageService', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var pepperMessageService;
  beforeEach(inject(function (_pepperMessageService_) {
    pepperMessageService = _pepperMessageService_;
  }));

  it('should do something', function () {
    expect(!!pepperMessageService).toBe(true);
  });

});
