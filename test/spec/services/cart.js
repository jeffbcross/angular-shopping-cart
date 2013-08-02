'use strict';

describe('Service: cart', function () {

  // load the service's module
  beforeEach(module('initApp'));

  // instantiate service
  var cart;
  beforeEach(inject(function (_cart_) {
    cart = _cart_;
  }));

  it('should exist', function () {
    expect(!!cart).toBe(true);
  });

  it('should have a function add', function () {
    expect(typeof cart.add).toEqual('function');
  });
});
