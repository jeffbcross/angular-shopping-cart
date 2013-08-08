'use strict';

angular.module('initApp')
  .value('jcUserValidation', {
      address1: /^[0-9]{0,6} [A-Za-z0-9\. ]+$/,
      address2: /^[a-zA-Z ]+, [a-zA-Z]{2} [0-9]{5}(\-[0-9]{4})?$/,
      name: /^[A-Za-z]+ [A-Za-z]+$/
    
  });
