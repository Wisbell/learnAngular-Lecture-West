console.log("main.js controller loaded")


app.controller('MyMainController', function($scope){
    $scope.potatoes = "mashed"
    $scope.steak = "yummy?"
    $scope.number = 8;
    $scope.bool = true;
    $scope.obj = {1: "thing"}
    $scope.functionHere = function(arg){
        console.log("function here called with arg", arg)
    }

    var something = "won't show up on the html with {{}}"
    function doSomething(){
        console.log("doSomething function called")
    }
})
