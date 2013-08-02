'use strict';

angular.module('initApp')
  .directive('cart', function () {
    return {
      templateUrl: 'views/jc-cart.html',
      restrict: 'E',
      controller: 'JcCartCtrl',
      scope: true
    };
  });
