'use strict';

angular.module('initApp')
  .factory('products', function ($resource, $q) {
    var products = $resource('http://localhost\\:2403/products', null, {
      getAll: {
        method: 'GET',
        isArray: true
      }
    });
    return {
      products: {},
      getAll: function () {
        var deferred = $q.defer()
          , self = this;
        products.getAll(null, function (res) {
          delete self['products'];
          self.products = {};
          angular.forEach(res, function (p, key) {
            self.products[p.id] = p;
          });
          deferred.resolve(res);
        });
        
        return deferred.promise;
      }
    }
  });
