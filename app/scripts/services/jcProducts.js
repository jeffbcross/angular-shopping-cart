'use strict';

angular.module('initApp')
  .factory('Product', function ($resource) {
    return $resource('http://localhost\\:2403/products');
  })
  .service('jcProducts', function ($q, Product) {
    var mapResults = function (response) {
      angular.forEach(response, function (product) {
        this.products[product.id] = product;
      }.bind(this));
    }.bind(this);

    this.products = {};
    this.get = function () {
      var deferred = $q.defer();
      Product.query(null, function (products) {
        mapResults(products);
        deferred.resolve(products);
        return products;
      });
      
      return deferred.promise;
    };
  });
