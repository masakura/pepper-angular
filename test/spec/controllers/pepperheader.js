'use strict';

describe('Controller: PepperheaderCtrl', function () {

  // load the controller's module
  beforeEach(module('pepperAngularApp'));

  var PepperheaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PepperheaderCtrl = $controller('PepperheaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PepperheaderCtrl.awesomeThings.length).toBe(3);
  });
});
