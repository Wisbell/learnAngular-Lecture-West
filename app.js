console.log("app.js loaded")

// angular.module(app name, dependencies)
var app = angular.module('myAppName', [])


// name of controller convention

    // capitalize first word

        // MyMainCtrl

// app.controller(name of controller, function)
app.controller('myMainController', function($scope){
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
