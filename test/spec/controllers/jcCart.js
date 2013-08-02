'use strict';

describe('Controller: JcCartCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var JcCartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JcCartCtrl = $controller('JcCartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
