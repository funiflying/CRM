'use strict';

angular.module('fycrm')
  .factory('empService', ['$http', function($http) {
    return {
      findEmp: function(queryParam, pageNo) {
        return {
          data: [
            {id: 101, name: '张三', username: 'z3', password: '******', dept: {id: 300, name: '上级部门'},  mgr: {name: 'Tom', id: 200}, job: 'A', state: 'aa'},
            {id: 102, name: 'Rose', username: 'z3', password: '******', dept: {id: 300, name: '上级部门'},  mgr: {name: 'Tom', id: 200}, job: 'A', state: 'bb'},
            {id: 103, name: '张三', username: 'z3', password: '******', dept: {id: 300, name: '上级部门'},  mgr: {name: 'Tom', id: 200}, job: 'A', state: 'aa'},
            {id: 104, name: '张三', username: 'z3', password: '******', dept: {id: 300, name: '上级部门'},  mgr: {name: 'Tom', id: 200}, job: 'A', state: 'aa'},
            {id: 105, name: '张三', username: 'z3', password: '******', dept: {id: 300, name: '上级部门'},  mgr: {name: 'Tom', id: 200}, job: 'B', state: 'aa'},
            {id: 201, name: 'Tom', username: 'z3', password: '******', dept: {id: 300, name: '上级部门'},  mgr: {name: 'Tom', id: 200}, job: 'D', state: 'bb'}
          ],
          totalItems: 85,
          pageSize: queryParam.pageSize,
          currPageNo: pageNo,
          errorCode: 0,
          errorMsg: ''
        };
      }
    };
  }]);