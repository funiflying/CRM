'use strict';

angular.module('fycrm')
    .constant('enums', {
        memberStatus: [{
            value: 'REGISTERED',
            name: '已注册'
        }, {
            value: 'CERTIFICATED',
            name: '已认证'
        }, {
            value: 'BOUND',
            name: '已绑卡'
        }, {
            value: ''
        }, {
            value: 'INVESTED',
            name: '已投资'
        }],
        possibility: [{
            value: 10,
            name: '10%'
        }, {
            value: 30,
            name: '30%'
        }, {
            value: 60,
            name: '60%'
        }, {
            value: 90,
            name: '90%'
        }, {
            value: 100,
            name: '100%'
        }],
        position: [{
            value: 'STAFF',
            name: '专员'
        }, {
            value: 'SUPERVISOR',
            name: '主管'
        }, {
            value: 'MANAGER',
            name: '经理'
        }, {
            value: 'DIRECTOR',
            name: '总监'
        }],
        empState: {
            'aa': 'sfdfd',
            'bb': 'dffdf'
        },
        workShift: {
            '1MORNING_SHIFT': '早班',
            '2MIDDLE_SHIFT': '中班',
            '3NIGHT_SHIFT': '晚班'
        }
    });
