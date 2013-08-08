'use strict';

angular.module('initApp')
  .controller('JCProductListCtrl', function ($scope, jcProducts, jcCart) {
    $scope.products = jcProducts.get();
    $scope.cart = jcCart;
  });
