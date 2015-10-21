'use strict';

angular.module('fycrm')
  .controller('DeptCtrl', function ($scope, $modal, $log, deptService) {
    $scope.deptList = {
      data: [],
      totalItems: 0,
      pageSize: 0,
      currPageNo: 1
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.deptList.currPageNo);
      $scope.find($scope.deptList.currPageNo);
    };

    $scope.find = function(pageNo) {
      if ($scope.queryParamForm.$valid) {
        deptService.findDept($scope.queryParam, pageNo)
          .then(function(result) {
            $log.info(angular.toJson(result));
            if (result.data.params._message_) {
              $scope.alerts.msgs.push(result.data.params._message_);
            } else {
              var tmp = [];
              for (var row in result.data.tables.list.rows) {
                tmp.push({
                  id: result.data.tables.list.rows[row][0],
                  name: result.data.tables.list.rows[row][1],
                  parent: {
                    id: result.data.tables.list.rows[row][2],
                    name: result.data.tables.list.rows[row][3]
                  },
                  leader: {
                    id: result.data.tables.list.rows[row][4],
                    name: result.data.tables.list.rows[row][5]
                  }
                });
              }
              $scope.deptList.data = tmp;
              $scope.deptList.pageSize = $scope.queryParam.pageSize;
              $scope.deptList.currPageNo = pageNo;
              $scope.deptList.totalItems = result.data.params.totalItems;
            }
          }, function(err) {
            $log.info(angular.toJson(err));
            $scope.alerts.msgs.push(err.status + ': ' + err.statusText);
          });
      } else {
        $scope.queryParamForm.submitted = true;
      }
    };

    $scope.openInputDept = function(dept, size) {
      var modalInstance = $modal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: 'inputDept.html',
        controller: 'InputDeptCtrl',
        size: size,
        resolve: {
          dept: function() {
            // 需要复制对象，否则检验失败后，会直接将dept中相应字段的数据清空。angular.extend()是浅复制，而angular.copy()是深复制。
            return angular.copy(dept);
          }
        }
      });

      modalInstance.result.then(function (inputDept) {
        if (inputDept.id) { // 编辑
          for (var i = 0; i < $scope.deptList.data.length; i++) {
            if (inputDept.id == $scope.deptList.data[i].id) {
              $scope.deptList.data[i] = inputDept;
              return;
            }
          }
        } else { // 新增

        }
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.deleteDept = function(deptId) {
      /*deptService.deleteDeptById(deptId).
        then(function(result) {

          $scope.find(1);
        }, function(err) {

        });*/
    };
  });

angular.module('fycrm')
  .controller('InputDeptCtrl', function ($scope, $modalInstance, deptService, empService, dept) {
    $scope.dept = dept;
    $scope.title = dept==null ? '新增组织机构' : '编辑组织机构';

    $scope.getDepts = function(viewValue) {
      var param = {inputVal: viewValue};
      return deptService.findDept(param, 1).data;
    };

    $scope.getLeaders = function(viewValue) {
      var param = {inputVal: viewValue};
      return empService.findEmp(param, 1).data;
    };
    
    $scope.ok = function () {
      if ($scope.deptForm.$valid) {
        /*deptService.saveOrUpdateDept($scope.dept)
          .then(function(result) {
            $modalInstance.close($scope.dept);
          }, function(err) {

          });*/
      } else {
        $scope.deptForm.submitted = true;
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });