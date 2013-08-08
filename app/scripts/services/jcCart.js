'use strict';

angular.module('initApp')
  .factory('jcCartResource', function ($resource) {
    return $resource('http://localhost\\:2403/cart');
  })
  .service('jcCart', function (jcProducts, jcCartResource, $window) {
    this.total = 0;
    this.items = {};

    this.calculateTotal = function () {
      this.total = 0;
      angular.forEach(this.items, function (val, key) {
        this.total += jcProducts.products[key].price * val;
      }.bind(this));
    };

    this.submit = function (user) {
      jcCartResource.save({user: user, cart: this.items}, function (){
        $window.alert('Thanks, '+ user.name +', your order has been placed.');
      }, function () {
        $window.alert('Sorry, '+ user.name +', there was a problem placing your order.');
      });
      this.clear();
      this.checkingOut = false;
    };

    this.add = function(id) {
      this.items[id] = this.items[id]? this.items[id] + 1 : 1;
      this.calculateTotal();
    };

    this.remove = function (id) {
      if (this.items[id] > 1) {
        this.items[id]--;
        this.calculateTotal();
        return 
      }

      delete this.items[id];
      this.calculateTotal();
    };

    this.clear = function () {
      angular.copy({}, this.items);
      this.calculateTotal();
      this.checkingOut = false;
    };

    this.isEmpty = function () {
      return Object.keys(this.items).length === 0;
    };
  });
