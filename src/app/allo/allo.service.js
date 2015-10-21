'use strict';

angular.module('fycrm')
  .factory('alloService', ['$http', function($http){
    return {
      findAllo: function(queryParam, pageNo) {
        return {
          data: [
            {salesman: {id: 102, name: 'Rose'}, customer: {id: 400, name: 'Kate'}, alloDatetime: new Date('2015-05-23 12:34:45.345')},
            {salesman: {id: 102, name: 'Rose'}, customer: {id: 400, name: 'Kate'}, alloDatetime: new Date('2015-05-23 12:34:45.345')},
            {salesman: {id: 102, name: 'Rose'}, customer: {id: 400, name: 'Kate'}, alloDatetime: new Date('2015-05-23 12:34:45.345')},
            {salesman: {id: 102, name: 'Rose'}, customer: {id: 400, name: 'Kate'}, alloDatetime: new Date('2015-05-23 12:34:45.345')},
            {salesman: {id: 102, name: 'Rose'}, customer: {id: 400, name: 'Kate'}, alloDatetime: new Date('2015-05-23 12:34:45.345')},
            {salesman: {id: 102, name: 'Rose'}, customer: {id: 400, name: 'Kate'}, alloDatetime: new Date('2015-05-23 12:34:45.345')}
          ],
          totalItems: 100,
          pageSize: queryParam.pageSize,
          currPageNo: pageNo,
          errorCode: 0,
          errorMsg: ''
        };
      }
    };
  }]);