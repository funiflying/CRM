'use strict';

angular.module('fycrm')
  .factory('dutyService', ['$http', function($http){
    return {
      findDuty: function(queryParam, pageNo) {
        return {
          data: [
            {id: 400, day: new Date('2015-03-20'), salesman: {id: 300, name: 'Rose'}, workShift: '1MORNING_SHIFT'},
            {id: 400, day: new Date('2015-04-30'), salesman: {id: 300, name: 'Rose'}, workShift: '1MORNING_SHIFT'},
            {id: 400, day: new Date('2015-04-30'), salesman: {id: 300, name: 'Rose'}, workShift: '1MORNING_SHIFT'},
            {id: 400, day: new Date('2015-04-30'), salesman: {id: 300, name: 'Rose'}, workShift: '1MORNING_SHIFT'},
            {id: 400, day: new Date('2015-04-30'), salesman: {id: 300, name: 'Rose'}, workShift: '3NIGHT_SHIFT'},
            {id: 400, day: new Date('2015-04-30'), salesman: {id: 300, name: 'Rose'}, workShift: '3NIGHT_SHIFT'}
          ],
          totalItems: 64,
          pageSize: queryParam.pageSize,
          currPageNo: pageNo,
          errorCode: 0,
          errorMsg: ''
        };
      }
    };
  }]);