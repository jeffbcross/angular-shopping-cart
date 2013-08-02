'use strict';

angular.module('initApp')
  .controller('JcProductListCtrl', function ($scope, products, cart) {
    $scope.products = products.getAll();
    $scope.cart = cart;
  });
