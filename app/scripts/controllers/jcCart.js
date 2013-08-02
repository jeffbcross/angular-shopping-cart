'use strict';

angular.module('initApp')
  .controller('JcCartCtrl', function ($scope, $filter, cart, products) {
    $scope.cart = cart;
    $scope.products = products;
    $scope.$watch('cart.isEmpty()', function (empty) {
      if (empty) $scope.checkingOut = false;
    })
  });
