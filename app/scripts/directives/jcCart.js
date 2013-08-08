'use strict';

angular.module('initApp')
  .directive('jcCart', function () {
    return {
      templateUrl: 'views/jc-cart.html',
      restrict: 'E',
      scope: true,
      controller: 'JCCartCtrl'
    };
  });
