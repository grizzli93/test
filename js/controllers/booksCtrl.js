AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataService',
    'dataBus',
    function ($http, $scope, $dataService, $dataBus) {
            console.log($dataService);
        $scope.getAuthorId = function (arg) {
            for (var i = 0; i < $scope.authors.length; i++) {
                if ($scope.authors[i].name == arg) {
                    return $scope.authors[i].id;
                }
            }
        };

        $scope.editEntry = function () {

        };

        if (!($dataBus.myBooks = $dataService.getCollection('myBooksCollection'))) {
            $http.get('data/data.books.json').then(function (data) {
                $dataService.setCollection('myBooksCollection', data.data);debugger;
                $scope.books = $dataBus.myBooks;
            });
        }

        if (!($dataBus.myAuthors = $dataService.getCollection('myAuthorsCollection'))) {
            $http.get('data/data.authors.json').then(function (data) {
                $dataService.setCollection('myAuthorsCollection', data.data);
                $scope.authors = $dataBus.myAuthors;
            });
        }
}]);