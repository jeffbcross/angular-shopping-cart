'use strict';

angular.module('initApp')
  .controller('JcCheckoutCtrl', function ($scope, cart) {
    $scope.submit = function () {
      console.log($scope);
      alert('Thanks, ' + $scope.user.name + ' I\'ll mail your stuff!');
      cart.clearCart();
    }
  });
