'use strict';

describe('Filter: network', function () {

  // load the filter's module
  beforeEach(module('pepperAngularApp'));

  // initialize a new instance of the filter before each test
  var network;
  beforeEach(inject(function ($filter) {
    network = $filter('network');
  }));

  it('should return the input prefixed with "network filter:"', function () {
    var text = 'angularjs';
    expect(network(text)).toBe('network filter: ' + text);
  });

});
