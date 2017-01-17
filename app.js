console.log("app.js loaded")

// angular.module(app name, dependencies)
const app = angular.module('myAppName', ['ngRoute'])


app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'MyMainController',
        templateUrl: 'partials/main.html'
    })
    .when('/list', {
        controller: 'ListCtrl',
        templateUrl: 'partials/list.html'
    })
})





// CONTROLLERS

// name of controller convention

    // capitalize first word

        // MyMainCtrl

// app.controller(name of controller, function)
app.controller('MyMainController', function($scope){
    $scope.potatoes = "mashed"
    $scope.steak = "yummy?"
    $scope.number = 8;
    $scope.bool = true;
    $scope.obj = {1: "thing"}
    $scope.functionHere = function(){
        console.log("function here called")
    }

    var something = "won't show up on the html with {{}}"
    function doSomething(){
        console.log("doSomething function called")
    }
})

// list page controller
app.controller('ListCtrl', function($scope, $http){
    console.log("MyListController horray")

    $http.get('list.json')
        //resolve
        .then(function(val){
            console.log("val", val)
            console.log("list.json", val.data)
            $scope.list = val.data.list
            $scope.list.push("another thing!") // if statement in liste partial will not show now
        },
        //reject  like .catch()   ??
        function(){
            console.log("rejected!!")
        })
})
