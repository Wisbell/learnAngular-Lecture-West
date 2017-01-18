// list page controller
app.controller('ListCtrl', function($scope, $http){
    console.log("MyListController horray")

    $scope.clickFunction = function(){
        console.log("click function button clicked?")
    }

    $http.get('list.json')
        //resolve
        .then(function(val){
            console.log("val", val)
            console.log("list.json", val.data)
            $scope.list = val.data.list
            // $scope.list.push("another thing!") // if statement in liste partial will not show now
        },
        //reject  like .catch()   ??
        function(){
            console.log("rejected!!")
        })
})
