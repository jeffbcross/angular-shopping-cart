'use strict';

describe('Service: products', function () {

  // load the service's module
  beforeEach(module('initApp'));

  // instantiate service
  var products;
  beforeEach(inject(function (_products_) {
    products = _products_;
  }));

  it('should exist', function () {
    expect(!!products).toBe(true);
  });

  it('should have a getAll method', function () {
    expect(typeof products.getAll).toEqual('function');
  });

});
