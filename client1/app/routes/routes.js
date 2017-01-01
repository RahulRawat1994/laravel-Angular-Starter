app 
    .config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider){

        
        $urlRouterProvider.otherwise('/');
       // $locationProvider.html5Mode(true);

        $stateProvider
            .state({
                name    : 'master',
                url     : '/', 
                templateUrl : 'client/app/views/view.html'  
            })
            .state({
                name        : 'hello',
                url         : 'hello',
                templateUrl : 'client/app/views/view.html'  
            })

    }])