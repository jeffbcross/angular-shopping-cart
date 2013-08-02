'use strict';

describe('Directive: cart', function () {
  beforeEach(module('initApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<cart></cart>');
    element = $compile(element)($rootScope);
    // expect(element.text()).toBe('this is the cart directive');
  }));
});
