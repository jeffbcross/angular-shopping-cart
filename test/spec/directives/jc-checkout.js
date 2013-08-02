'use strict';

describe('Directive: jcCheckout', function () {
  beforeEach(module('initApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<jc-checkout></jc-checkout>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the jcCheckout directive');
  }));
});
