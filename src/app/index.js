'use strict';

angular.module('fycrm', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript, */*; q=0.01';
        $httpProvider.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

        // 将对象转换为查询字符串（即param1=value1&param2=value2）
        var param = function (obj) {
            var query = '',
                name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest  
        $httpProvider.defaults.transformRequest = [function (data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];

        $stateProvider
            .state('home', {
                abstract: true,
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('home.track', {
                url: '/track', // 实际URL是/home/track
                templateUrl: 'app/track/track.html',
                controller: 'TrackCtrl'
            })
            .state('home.dept', {
                url: '/dept',
                templateUrl: 'app/dept/dept.html',
                controller: 'DeptCtrl'
            })
            .state('home.emp', {
                url: '/emp',
                templateUrl: 'app/emp/emp.html',
                controller: 'EmpCtrl'
            })
            .state('home.duty', {
                url: '/duty',
                templateUrl: 'app/duty/duty.html',
                controller: 'DutyCtrl'
            })
            .state('home.allo', {
                url: '/allo',
                templateUrl: 'app/allo/allo.html',
                controller: 'AlloCtrl'
            })
            .state('login', {
                url: '/',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl',
                onEnter: function ($rootScope) {
                    $rootScope.css.bodyClass = 'login';
                },
                onExit: function ($rootScope) {
                    $rootScope.css.bodyClass = null;
                }
            });

        $urlRouterProvider.otherwise('/');
    })
    .run(function ($rootScope, $state, enums, navs, loginService) {
        $rootScope.enums = enums;
        $rootScope.navs = navs;
        $rootScope.css = {
            bodyClass: null
        };
        $rootScope.user = {};
        $rootScope.baseUrl = '/crm0-portal';

        // 全局提示信息条
        $rootScope.alerts = {
            type: 'danger',
            msgs: []
        };

        $rootScope.$on('$stateChangeStart',
            function (evt, toState, roParams, fromState, fromParams) {
                if (toState.name != 'login' && !$rootScope.user.id) {
                    evt.preventDefault(); // 阻止这一状态改变
                    $state.go('login');
                }
            });
    });
