'use strict';

describe('Controller: CookbookCtrl', function () {

  // load the controller's module
  beforeEach(module('pepperAngularApp'));

  var CookbookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookbookCtrl = $controller('CookbookCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CookbookCtrl.awesomeThings.length).toBe(3);
  });
});
