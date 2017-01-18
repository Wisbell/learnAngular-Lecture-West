app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
        controller: 'MyMainController',
        templateUrl: 'partials/main.html'
    })
    .when('/list', {
        controller: 'ListCtrl',
        templateUrl: 'partials/list.html'
    })
    .when('/list/:someVariable', {
        controller: 'DetailCtrl',
        templateUrl: 'partials/detail.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})
