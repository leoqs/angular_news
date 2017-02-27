(function(angular){
    'use stric';
    //创建主模块
    angular.module('newsApp',[
            'ngResource',
            'ui.router',
            'newsApp.home'
        ])
    //配置路由
        .config(function($urlRouterProvider){
            // $urlRouterProvider
            //     .otherwise('/home');
        });
})(angular);
(function(angular){
    'use strict';
    angular.module('newsApp.home',[])
        .config(function($stateProvider){
            $stateProvider
                .state('home',{
                    url:'/home',
                    controller:'homeCtrl',
                    templateUrl:'views/home/home.html'
                })
                .state('test',{
                    url:'/{test}',
                    controller:'homeCtrl',
                    templateUrl:'views/home/test.html'
                })
        })
        .controller('homeCtrl',homeCtrl);

        function homeCtrl($scope,$stateParams){
            console.log($stateParams);
        }
})(angular);