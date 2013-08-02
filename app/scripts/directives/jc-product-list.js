'use strict';

angular.module('initApp')
  .directive('jcProductList', function () {
    return {
      templateUrl: 'views/jc-product-list.html',
      restrict: 'E',
      controller: 'JcProductListCtrl',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
