'use strict';

angular.module('fycrm')
  .factory('navService', ['$http', '$rootScope', function($http, $rootScope){
    return {
      findNavByUserId: function(userId) {
        return $http.get($rootScope.baseUrl + '/security/userNav?userId=' + userId);
      }
    };
  }]);