AngularApp.controller('booksController', ['$http', '$scope', 'dataService', function ($http, $scope, $dataService) {

    $scope.getAuthorId = function (arg) {
        for (var i = 0; i < $scope.authors.length; i++) {
            if ($scope.authors[i].name == arg) {
                return $scope.authors[i].id;
            }
        }
    };

    $scope.editEntry = function () {

    };

    $scope.removeItem = function (id, type) {
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
        $scope.idToRemove = '';
        $scope.typeToRemove = '';
    };

    if (!$dataService.getCollection('myBooksCollection')) {
        $http.get('data/data.books.json').success(function (data) {
            $dataService.setCollection('myBooksCollection', data);
        });
    }
    if (!$dataService.getCollection('myAuthorsCollection')) {
        $http.get('data/data.authors.json').success(function (data) {
            $dataService.setCollection('myAuthorsCollection', data);
        });
    }
    //
    $scope.books = $dataService.getCollection('myBooksCollection') || [];
    $scope.authors = $dataService.getCollection('myAuthorsCollection') || [];

    $scope.itemToRemove = {
        idToRemove: '',
        typeToRemove: ''
    };
}]);