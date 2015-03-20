AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataService',
    'dataBus',
    function ($http, $scope, $dataService, dataBus) {

    $scope.getAuthorId = function (arg) {
        for (var i = 0; i < $scope.authors.length; i++) {
            if ($scope.authors[i].name == arg) {
                return $scope.authors[i].id;
            }
        }
    };

    $scope.editEntry = function () {

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

    $scope.books = $dataService.getCollection('myBooksCollection') || [];
    $scope.authors = $dataService.getCollection('myAuthorsCollection') || [];
}]);