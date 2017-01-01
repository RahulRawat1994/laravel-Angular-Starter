app 
    .config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider){

        
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true).hashPrefix('!')

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