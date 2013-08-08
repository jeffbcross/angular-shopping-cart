'use strict';

angular.module('initApp')
  .controller('JCCheckoutCtrl', function ($scope, jcUserValidation) {
    $scope.validation = jcUserValidation;
  });
