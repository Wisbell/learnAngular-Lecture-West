
// Detailed list controller
app.controller('DetailCtrl', function($scope, $routeParams, $http){
    console.log('detail controller')

    $scope.thingFromUrl = $routeParams.someVariable

    // get JSON
        // returns a promise
    $http.get(`list.json`)
        .then(function(val){
            console.log(val)

            // dont need scope on list variable because it is nto used in html
            let list = val.data.list
            console.log(list)
            $scope.selectedItem = list[$scope.thingFromUrl]
        })

})
