'use strict';

angular.module('initApp')
  .controller('JCCartCtrl', function ($scope, jcProducts, jcCart) {
    $scope.products = jcProducts;
    $scope.cart = jcCart;
  });
