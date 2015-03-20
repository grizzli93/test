AngularApp.controller('deleteController', ['$scope','dataBus', function($scope, dataBus) {

    $scope.removeItem = function (dataBus, type) {
        if (type == 'book') {
            for (var i = 0; i < $scope.books.length; i++) {
                if ($scope.books[i].id == id) {
                    $scope.books.splice(i, 1);
                    $dataService.setCollection('myBooksCollection', $scope.books);
                    return false;
                }
            }
        }
        else {
            for (var i = 0; i < $scope.authors.length; i++) {
                if ($scope.authors[i].id == id) {
                    $scope.authors.splice(i, 1);
                    $dataService.setCollection('myAuthorsCollection', $scope.authors);
                    return false;
                }
            }
        }
        dataBus.idToRemove = '';
        dataBus.typeToRemove = '';
    };
}]);