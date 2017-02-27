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