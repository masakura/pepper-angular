'use strict';

describe('Service: qiSession', function () {

  // load the service's module
  beforeEach(module('pepperAngularApp'));

  // instantiate service
  var qiSession;
  beforeEach(inject(function (_qiSession_) {
    qiSession = _qiSession_;
  }));

  it('should do something', function () {
    expect(!!qiSession).toBe(true);
  });

});
