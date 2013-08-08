'use strict';

angular.module('initApp')
  .directive('jcProductList', function () {
    return {
      templateUrl: 'views/jc-product-list.html',
      restrict: 'EACM',
      controller: 'JCProductListCtrl'
    };
  });
