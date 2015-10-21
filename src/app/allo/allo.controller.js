'use strict';

angular.module('fycrm')
  .controller('AlloCtrl', function ($scope, $modal, $log, alloService) {
    $scope.alloList = {
      data: [],
      totalItems: 0,
      pageSize: 0,
      currPageNo: 1,
      errorCode: 0,
      errorMsg: ''
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.alloList.currPageNo);
      $scope.find($scope.alloList.currPageNo);
    };

    $scope.find = function(pageNo) {
      if ($scope.queryParamForm.$valid) {
        $scope.alloList = alloService.findAllo($scope.queryParam, pageNo);
        if ($scope.alloList.errorCode != 0) {
          $scope.alerts.msgs.push($scope.alloList.errorMsg);
          return;
        }
      } else {
        $scope.queryParamForm.submitted = true;
      }
    };

    $scope.openEditAllo = function(allo, size) {
      var modalInstance = $modal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: 'editAllo.html',
        controller: 'EditAlloCtrl',
        size: size,
        resolve: {
          allo: function() {
            // 需要复制对象，否则检验失败后，会直接将allo中相应字段的数据清空。
            return angular.copy(allo);
          }
        }
      });

      modalInstance.result.then(function (editAllo) {
        editAllo.alloDatetime = new Date();

        for (var i = 0; i < $scope.alloList.data.length; i++) {
          if (editAllo.id == $scope.alloList.data[i].id) {
            $scope.alloList.data[i] = editAllo;
            return;
          }
        }
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

angular.module('fycrm')
  .controller('EditAlloCtrl', function ($scope, $modalInstance, empService, allo) {
    $scope.allo = allo;
    $scope.title = '编辑客户分配记录';

    $scope.getSales = function(viewValue) {
      var param = {inputVal: viewValue};
      return empService.findEmp(param, 1).data;
    };
    
    $scope.ok = function () {
      if ($scope.alloForm.$valid) {
        $modalInstance.close($scope.allo);
      } else {
        $scope.alloForm.submitted = true;
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });