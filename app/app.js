console.log("app.js loaded")

// angular.module(app name, dependencies)
const app = angular.module('myAppName', ['ngRoute'])


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





// CONTROLLERS

// name of controller convention

    // capitalize first word

        // MyMainCtrl

// app.controller(name of controller, function)
