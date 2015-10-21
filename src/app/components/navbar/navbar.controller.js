'use strict';

angular.module('fycrm')
    .controller('NavbarCtrl', function ($rootScope, $scope, $state, $log, loginService) {
        $scope.logout = function () {
            if ($rootScope.user.id) {
                loginService.logout($rootScope.user.id)
                    .then(function (result) {
                        $log.info(angular.toJson(result));
                        if (result.data.params._message_) {
                            $scope.alerts.msgs.push(result.data.params._message_);
                        } else {
                            $rootScope.user = {};
                            $state.go('login');
                        }
                    }, function (err) {
                        $log.info(angular.toJson(err));
                        $scope.alerts.msgs.push(err.status + ': ' + err.statusText);
                    });
            }
        };
    });
