'use strict';

angular.module('fycrm')
  .controller('TrackCtrl', function ($scope, $modal, $log, trackService) {
    $scope.newAlloList = {
      data: [],
      totalItems: 0,
      pageSize: 0,
      currPageNo: 1
    };

    $scope.needTrackList = {
      data: [],
      totalItems: 0,
      pageSize: 0,
      currPageNo: 1
    };

    $scope.tabs = {
      activeTab: 0
    };

    $scope.newAlloPageChanged = function() {
      $scope.findNewAllo($scope.newAlloList.currPageNo);
    };

    $scope.needTrackPageChanged = function() {
      $scope.findNeedTrack($scope.needTrackList.currPageNo);
    };

    $scope.findNewAllo = function(pageNo) {
      if ($scope.queryParamForm.$valid) {
        trackService.findNewAllo($scope.queryParam, pageNo)
          .then(function(result) {
            $log.info(angular.toJson(result));
            if (result.data.params._message_) {
              $scope.alerts.msgs.push(result.data.params._message_);
            } else {
              var tmp = [];
              for (var row in result.data.tables.list.rows) {
                tmp.push({
                  userName: result.data.tables.list.rows[row][0],
                  registrationDate: result.data.tables.list.rows[row][1],
                  memberName: result.data.tables.list.rows[row][2],
                  mobile: result.data.tables.list.rows[row][3],
                  email: result.data.tables.list.rows[row][4],
                  memberStatus: result.data.tables.list.rows[row][5],
                  assetsAcquired: result.data.tables.list.rows[row][6],
                  assetsMaturingDate: result.data.tables.list.rows[row][7],
                  deposits: result.data.tables.list.rows[row][8],
                  withdrawals: result.data.tables.list.rows[row][9],
                  balance: result.data.tables.list.rows[row][10],
                  followUpDate: result.data.tables.list.rows[row][11],
                  possibility: result.data.tables.list.rows[row][12],
                  notes: result.data.tables.list.rows[row][13]
                });
              }
              $scope.newAlloList.data = tmp;
              $scope.newAlloList.pageSize = $scope.queryParam.pageSize;
              $scope.newAlloList.currPageNo = pageNo;
              $scope.newAlloList.totalItems = result.data.params.recordCount;
            }
          }, function(err) {
            $log.info(angular.toJson(err));
            $scope.alerts.msgs.push(err.status + ': ' + err.statusText);
          });
      } else {
        $scope.queryParamForm.submitted = true;
      }
    };

    $scope.findNeedTrack = function(pageNo) {
      if ($scope.queryParamForm.$valid) {
        trackService.findNeedTrack($scope.queryParam, pageNo)
          .then(function(result) {
            $log.info(angular.toJson(result));
            if (result.data.params._message_) {
              $scope.alerts.msgs.push(result.data.params._message_);
            } else {
              var tmp = [];
              for (var row in result.data.tables.list.rows) {
                tmp.push({
                  userName: result.data.tables.list.rows[row][0],
                  registrationDate: result.data.tables.list.rows[row][1],
                  memberName: result.data.tables.list.rows[row][2],
                  mobile: result.data.tables.list.rows[row][3],
                  email: result.data.tables.list.rows[row][4],
                  memberStatus: result.data.tables.list.rows[row][5],
                  assetsAcquired: result.data.tables.list.rows[row][6],
                  assetsMaturingDate: result.data.tables.list.rows[row][7],
                  deposits: result.data.tables.list.rows[row][8],
                  withdrawals: result.data.tables.list.rows[row][9],
                  balance: result.data.tables.list.rows[row][10],
                  followUpDate: result.data.tables.list.rows[row][11],
                  possibility: result.data.tables.list.rows[row][12],
                  notes: result.data.tables.list.rows[row][13]
                });
              }
              $scope.needTrackList.data = tmp;
              $scope.needTrackList.pageSize = $scope.queryParam.pageSize;
              $scope.needTrackList.currPageNo = pageNo;
              $scope.needTrackList.totalItems = result.data.params.recordCount;
            }
          }, function(err) {
            $log.info(angular.toJson(err));
            $scope.alerts.msgs.push(err.status + ': ' + err.statusText);
          });
      } else {
        $scope.queryParamForm.submitted = true;
      }
    };

    $scope.find = function() {
      switch ($scope.tabs.activeTab) {
        case 1:
          $scope.findNeedTrack(1);
          break;
        default:
          $scope.findNewAllo(1);
      }
    };

    $scope.findYesterday = function() {
      var d = new Date();
      d.setDate(d.getDate() - 1);
      $scope.queryParam.registeredSince = d;
      $scope.find();
    };

    $scope.findToday = function() {
      $scope.queryParam.registeredSince = new Date();
      $scope.find();
    };

    $scope.openEditMemo = function (item, size) {
      var modalInstance = $modal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: 'editMemo.html',
        controller: 'EditMemoCtrl',
        size: size,
        resolve: {
          item: function () {
            return angular.copy(item);
          }
        }
      });

      modalInstance.result.then(function (editedItem) { // editedItem来自$modalInstance.close()的参数
        // 更新列表
        for (var i = 0; i < $scope.newAlloList.data.length; i++) {
          if (editedItem.id == $scope.newAlloList.data[i].id) {
            $scope.newAlloList.data[i] = editedItem;
            return;
          }
        }

        for (var j = 0; j < $scope.needTrackList.data.length; j++) {
          if (editedItem.id == $scope.needTrackList.data[j].id) {
            $scope.needTrackList.data[j] = editedItem;
            return;
          }
        }
      }, function () { // 这是函数在$modalInstance.dismiss('cancel')调用后执行
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

angular.module('fycrm')
  .controller('EditMemoCtrl', function ($scope, $modalInstance, item) { // item来自resolve.item
    $scope.item = item;

    $scope.ok = function () {
      if ($scope.editMemoForm.$valid) {
        $modalInstance.close($scope.item);
      } else {
        $scope.editMemoForm.submitted = true;
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });