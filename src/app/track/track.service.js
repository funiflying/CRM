'use strict';

angular.module('fycrm')
  .factory('trackService', ['$http', function($http){
    return {
      findNewAllo: function(queryParam, pageNo) {
        return {
          data: [
            {id: 500, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.1},
            {id: 501, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.1},
            {id: 501, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.1},
            {id: 501, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.1},
            {id: 501, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.1},
            {id: 501, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.1},
            {id: 501, salesman: {id: 203, name: 'Kate'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.3}
          ],
          totalItems: 90,
          pageSize: queryParam.pageSize,
          currPageNo: pageNo
        };
      },
      findNeedTrack: function(queryParam, pageNo) {
        return {
          data: [
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6},
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6},
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6},
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 8, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6},
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6},
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6},
            {id: 501, salesman: {id: 205, name: 'Rose'}, customer: {id: 300, name: 'Peter', tel: '1234555', email: 'abc@fy.com', regDate: new Date('2015-04-22'), state: '1REGISTERED'}, investFreq: 7, dueDate: new Date('2015-09-12'), nextFollowDay: new Date('2015-05-01'), memo: 'ddfdfd', probalilityOfSuccess: 0.6}
          ],
          totalItems: 70,
          pageSize: queryParam.pageSize,
          currPageNo: pageNo
        };
      }
    };
  }]);