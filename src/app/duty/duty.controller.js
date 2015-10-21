'use strict';

angular.module('fycrm')
  .controller('DutyCtrl', function ($scope, $modal, $log, dutyService) {
    $scope.dutyList = {
      data: [],
      totalItems: 0,
      pageSize: 0,
      currPageNo: 1,
      errorCode: 0,
      errorMsg: ''
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.dutyList.currPageNo);
      $scope.find($scope.dutyList.currPageNo);
    };

    $scope.find = function(pageNo) {
      if ($scope.queryParamForm.$valid) {
        $scope.dutyList = dutyService.findDuty($scope.queryParam, pageNo);
        if ($scope.dutyList.errorCode != 0) {
          $scope.alerts.msgs.push($scope.dutyList.errorMsg);
          return;
        }
      } else {
        $scope.queryParamForm.submitted = true;
      }
    };

    $scope.openInputDuty = function(duty, size) {
      var modalInstance = $modal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: 'inputDuty.html',
        controller: 'InputDutyCtrl',
        size: size,
        resolve: {
          duty: function() {
            return angular.copy(duty);
          }
        }
      });

      modalInstance.result.then(function (inputDuty) {
        if (inputDuty.id) { // 编辑
          for (var i = 0; i < $scope.dutyList.data.length; i++) {
            if (inputDuty.id == $scope.dutyList.data[i].id) {
              $scope.dutyList.data[i] = inputDuty;
              return;
            }
          }
        } else { // 新增

        }
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

angular.module('fycrm')
  .controller('InputDutyCtrl', function ($scope, $modalInstance, empService, duty) {
    if (duty) {
      $scope.duty = duty;
      $scope.title = '编辑排班记录';
    } else {
      $scope.duty = {workShift: '1MORNING_SHIFT'};
      $scope.title = '新增排班记录';
    }

    $scope.getSales = function(viewValue) {
      var param = {inputVal: viewValue};
      return empService.findEmp(param, 1).data;
    };
    
    $scope.ok = function () {
      if ($scope.dutyForm.$valid) {
        $modalInstance.close($scope.duty);
      } else {
        $scope.dutyForm.submitted = true;
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });