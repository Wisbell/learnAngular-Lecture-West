// list page controller
app.controller('ListCtrl', function($scope, $http, simpleFactory, listFactory){
    console.log("MyListController horray")

    $scope.factoryReturnThing = simpleFactory.getThatVar()

    $scope.clickFunction = function(){
        console.log("click function button clicked?")
    }

   listFactory.getList()
    .then((val) => {
        console.log("val from listCtrl", val)
        $scope.list = val
    })
   // console.log("list fact return", listFactory.getList())
   // $scope.list = listFactory.getList()
})
