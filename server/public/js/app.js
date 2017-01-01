var app = angular.module('app',['ui.router']);
app 
    .controller('userController',['$scope','$rootScope',function($scope,$rootScope){
        $scope.name="Rahul";
        $scope.email="rahul.rawat@walkwel.in";
    }])
app 
    .config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider){

        
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider
            .state({
                name: 'hello',
                url: '/hello',
                template: '<h3>hello world!</h3>' 
            })
            .state({
                name    : 'master',
                url     : '/', 
                template : '<h2>sdfsd</h2>',
                controller:'userController'  
            })
            

    }])
app 
    .service('userService',['$http',function($http){
        
    }])
//# sourceMappingURL=app.js.map
