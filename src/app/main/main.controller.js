'use strict';

angular.module('fycrm')
  .controller('MainCtrl', function ($rootScope, $scope, $log, navService) {
    $scope.myNavs = [];
    navService.findNavByUserId($rootScope.user.id)
      .then(function(result) {
        $log.info(angular.toJson(result));
        if (result.data.params._message_) {
          $scope.alerts.msgs.push(result.data.params._message_);
        } else {
          var tmp = [];
          for (var row in result.data.tables.list.rows) {
            tmp.push(result.data.tables.list.rows[row][0]);
          }
          $scope.myNavs = tmp;
        }
      }, function(err) {
        $log.info(angular.toJson(err));
        $scope.alerts.msgs.push('无法加载导航菜单！（' + err.status + ': ' + err.statusText + '）');
      });
  });
