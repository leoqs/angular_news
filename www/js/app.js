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