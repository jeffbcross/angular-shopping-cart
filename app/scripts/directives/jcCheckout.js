'use strict';

angular.module('initApp')
  .directive('jcCheckout', function () {
    return {
      templateUrl: 'views/jc-checkout.html',
      restrict: 'E',
      controller: 'JCCheckoutCtrl'
    };
  });
