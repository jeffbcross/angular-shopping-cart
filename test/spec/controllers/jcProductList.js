'use strict';

describe('Controller: JcProductListCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var JcProductListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JcProductListCtrl = $controller('JcProductListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
