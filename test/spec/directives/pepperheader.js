'use strict';

describe('Directive: pepperHeader', function () {

  // load the directive's module
  beforeEach(module('pepperAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pepper-header></pepper-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pepperHeader directive');
  }));
});
