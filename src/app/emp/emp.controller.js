'use strict';

angular.module('fycrm')
  .controller('EmpCtrl', function ($scope, $modal, $log, empService) {
    $scope.empList = {
      data: [],
      totalItems: 0,
      pageSize: 0,
      currPageNo: 1,
      errorCode: 0,
      errorMsg: ''
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.empList.currPageNo);
      $scope.find($scope.empList.currPageNo);
    };

    $scope.find = function(pageNo) {
      if ($scope.queryParamForm.$valid) {
        $scope.empList = empService.findEmp($scope.queryParam, pageNo);
        if ($scope.empList.errorCode != 0) {
          $scope.alerts.msgs.push($scope.empList.errorMsg);
          return;
        }
      } else {
        $scope.queryParamForm.submitted = true;
      }
    };

    $scope.openInputEmp = function(emp, size) {
      var modalInstance = $modal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: 'inputEmp.html',
        controller: 'InputEmpCtrl',
        size: size,
        resolve: {
          emp: function() {
            return angular.copy(emp);
          }
        }
      });

      modalInstance.result.then(function (inputEmp) {
        if (inputEmp.id) { // 编辑
          for (var i = 0; i < $scope.empList.data.length; i++) {
            if (inputEmp.id == $scope.empList.data[i].id) {
              $scope.empList.data[i] = inputEmp;
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
  .controller('InputEmpCtrl', function ($scope, $modalInstance, deptService, empService, emp) {
    if (emp) {
      $scope.emp = emp;
      $scope.title = '编辑销售员';
    } else {
      $scope.emp = {state: 'aa'};
      $scope.title = '新增销售员';
    }
    
    $scope.getDepts = function(viewValue) {
      return deptService.findDept(viewValue, 6, 1).data;
    };

    $scope.getMgrs = function(viewValue) {
      return empService.findEmp(viewValue, null, null, 6, 1).data;
    };
    
    $scope.ok = function () {
      if ($scope.empForm.$valid) {
        $modalInstance.close($scope.emp);
      } else {
        $scope.empForm.submitted = true;
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });