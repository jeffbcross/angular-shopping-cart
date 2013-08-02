'use strict';

describe('Controller: JcCheckoutCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var JcCheckoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JcCheckoutCtrl = $controller('JcCheckoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
