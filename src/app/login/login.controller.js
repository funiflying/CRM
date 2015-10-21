'use strict';

angular.module('fycrm')
  .controller('LoginCtrl', function ($rootScope, $scope, $state, $log, loginService) {
    $scope.login = function() {
      if ($scope.loginForm.$valid) {
        loginService.login($scope.login.username, $scope.login.password)
          .then(function(result) {
            $log.info(angular.toJson(result));
            if (result.data.params._message_) {
              $scope.alerts.msgs.push(result.data.params._message_);
            } else {
              $rootScope.user = {
                id: result.data.params.userId,
                name: result.data.params.userName,
                deptId: result.data.params.departmentId,
                position: result.data.params.position,
                email: result.data.params.email,
                managerId: result.data.params.managerId,
                accessTime: result.data.params.accessTime,
                inetAddress: result.data.params.inetAddress
              };
              $state.go('home.track');
            }
          }, function(err) {
            $log.info(angular.toJson(err));
            $scope.alerts.msgs.push(err.status + ': ' + err.statusText);
          });
      } else {
        $scope.loginForm.submitted = true;
      }
    };
  });
