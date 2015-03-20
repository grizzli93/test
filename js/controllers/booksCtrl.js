AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataService',
    'dataBus',
    function ($http, $scope, $dataService, $dataBus) {

        $scope.getAuthorId = function (arg) {
            for (var i = 0; i < $scope.authors.length; i++) {
                if ($scope.authors[i].name == arg) {
                    return $scope.authors[i].id;
                }
            }
        };

        $scope.editEntry = function () {

        };

//        if (!$dataService.getCollection('myBooksCollection')) {
//            $http.get('data/data.books.json').then(function (data) {
//                $dataService.setCollection('myBooksCollection', data.data);
//                $dataBus.myBooks = data.data;
                $scope.books = $dataBus.myBooks;
//            });
//        }

//        if (!($scope.authors = $dataService.getCollection('myAuthorsCollection'))) {
//            $http.get('data/data.authors.json').then(function (data) {
//                $dataService.setCollection('myAuthorsCollection', data.data);
//                $dataBus.myAuthors = data.data;
                $scope.authors = $dataBus.myAuthors;
//            });
//        }
}]);