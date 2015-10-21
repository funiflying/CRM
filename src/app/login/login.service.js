'use strict';

angular.module('fycrm')
  .factory('loginService', ['$http', '$rootScope', function($http, $rootScope){
    return {
      login: function(username, password) {
        return $http.post($rootScope.baseUrl + '/security/login', 
          'userId=' + username + '&_password_=' + password);
      },
      logout: function(userId) {
        return $http.get($rootScope.baseUrl + '/security/logout?userId=' + userId);
      }
    };
  }]);