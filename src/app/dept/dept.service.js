'use strict';

angular.module('fycrm')
  .factory('deptService', ['$http', '$rootScope', function($http, $rootScope){
    return {
      findDept: function(queryParam, pageNo) {
        var pageLowerLimit = queryParam.pageSize * (pageNo - 1) + 1;
        var pageUpperLimit = pageNo * queryParam.pageSize;
        var queryData = {
          'deptName': queryParam.deptName + '%',
          'pageUpperLimit': pageUpperLimit,
          'pageLowerLimit': pageLowerLimit
        };
        return $http.post($rootScope.baseUrl + '/dept/findDeptByName', queryData);

        /*{
          data: [
            {id: 100, name: '财务部', parent: {id: 120, name: '上级部门'}, leader: {id: 210, name: 'Tom'}},
            {id: 101, name: '电商部', parent: {id: 120, name: '上级部门'}, leader: {id: 210, name: 'Tom'}},
            {id: 102, name: '产品部', parent: {id: 120, name: '上级部门'}, leader: {id: 210, name: 'Tom'}},
            {id: 103, name: '人力资源部', parent: {id: 120, name: '上级部门'}, leader: {id: 210, name: 'Tom'}},
            {id: 104, name: 'IT部', parent: {id: 120, name: '上级部门'}, leader: {id: 210, name: 'Tom'}},
            {id: 105, name: '国际部', parent: {id: 120, name: '上级部门'}, leader: {id: 210, name: 'Tom'}}
          ],
          totalItems: 80,
          pageSize: queryParam.pageSize,
          currPageNo: pageNo,
          errorCode: 0,
          errorMsg: ''
        };*/
      },
      saveOrUpdateDept: function(dept) {
        var deptData = {
          'departmentName': dept.name,
          'parentId': dept.parent.id,
          'managerId': dept.leader.id
        };
        return $http.post($rootScope.baseUrl + '/dept/saveOrUpdateDept', deptData);
      },
      deleteDeptById: function(deptId) {
        return $http.get($rootScope.baseUrl + '/dept/deleteDeptById?deptId=' + deptId);
      }
    };
  }]);