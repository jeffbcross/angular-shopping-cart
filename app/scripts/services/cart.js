'use strict';

angular.module('initApp')
  .factory('cart', function (products) {
    var items = {};
    return {
      items: items,
      total: 0,
      updateTotal: function () {
        this.total = 0;
        angular.forEach(this.items, function (quantity, id) {
          this.total += products.products[id].price * quantity;
        }.bind(this));
      },
      add: function (id) {
        items[id] = items[id]? items[id] + 1 : 1;
        this.updateTotal();
      },
      decrease: function (id) {
        if (items[id] === 1) {
          delete items[id];
        }
        else {
          items[id] = items[id]? items[id] - 1 : 0;  
        }
        
        this.updateTotal();
      },
      removeAll: function (id) {
        items[id] = null;
        this.updateTotal();
      },
      get: function () {
        return items;
      },
      clearCart: function () {
        angular.forEach(items, function (item, key) {
          delete items[key];
        })
        this.updateTotal();
      },
      isEmpty: function () {
        return Object.keys(items).length === 0;
      }
    };
  });
