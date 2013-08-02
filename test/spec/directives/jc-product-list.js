'use strict';

describe('Directive: jcProductList', function () {
  beforeEach(module('initApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<jc-product-list></jc-product-list>');
    element = $compile(element)($rootScope);
    // expect(element.text()).toBe('this is the jcProductList directive');
  }));
});
