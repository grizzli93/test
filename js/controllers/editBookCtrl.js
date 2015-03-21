AngularApp.controller('editBookController', ['dataBus','$scope', function($dataBus, $scope) {
    $scope.book = {
        id: $dataBus.editItems,
        name: $dataBus.editItems

    }
}]);