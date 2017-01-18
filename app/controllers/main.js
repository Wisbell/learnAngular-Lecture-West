console.log("main.js controller loaded")


app.controller('MyMainController', function($scope, simpleFactory){
    // $scope.potatoes = "mashed"
    // $scope.steak = "yummy?"
    // $scope.number = 8;
    // $scope.bool = true;
    // $scope.obj = {1: "thing"}
    // $scope.functionHere = function(arg){
    //     console.log("function here called with arg", arg)
    // }

    // var something = "won't show up on the html with {{}}"
    // function doSomething(){
    //     console.log("doSomething function called")
    // }

    $scope.thingFromFactory = simpleFactory.getThatVar()

    $scope.setVariable = (newVal) => {
      console.log('newVal', newVal)
      simpleFactory.setThatVar(newVal)

      // change main view without reloading view
        // $scope.thingFromFactory = newVal
        $scope.thingFromFactory = simpleFactory.getThatVar()
    }
})
