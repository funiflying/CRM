'use strict';

angular.module('fycrm')
  .constant('navs', {
    'home.track': {name: '客户跟踪', icon: 'earphone'},
    'home.dept': {name: '组织机构', icon: 'globe'},
    'home.emp': {name: '员工', icon: 'user'},
    'home.duty': {name: '排班', icon: 'calendar'},
    'home.allo': {name: '客户分配', icon: 'random'}
  });