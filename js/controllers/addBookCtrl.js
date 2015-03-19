AngularApp.controller('addBookController', ['$scope', 'dataService', function($scope, $dataService) {

    $scope.addRequiredAuthor = function (arg) {
        for (var i = 0; i < $scope.authors.length; i++) {
            if ($scope.authors[i].name == arg) {
                $scope.authors[i].invisible = true;
            }
        }
        $scope.requiredAuthors.push(arg);
    };

    $scope.removeRequiredAuthor = function (arg) {
        for (var i = 0; i <= $scope.requiredAuthors.length; i++) {
            if ($scope.requiredAuthors[i] == arg) {
                $scope.requiredAuthors.splice(i, 1);
            }
        }
        for (var j = 0; j < $scope.authors.length; j++) {
            if ($scope.authors[j].name == arg) {
                $scope.authors[j].invisible = false;
            }
        }
    };

    $scope.addBook = function () {
        $scope.book.author = $scope.requiredAuthors;
        $scope.books.push($scope.book);console.log(1);
        $dataService.setCollection('myBooksCollection', $scope.books);

        $scope.requiredAuthors = [];
        $scope.book = {};
        $scope.books = $dataService.getCollection('myBooksCollection') || [];
    };

    $scope.restoreAuthors = function (arg) {
        for (var i = 0; i < $scope.authors.length; i++) {
            $scope.authors[i].invisible = false;
        }
        $scope.cleanModel(arg);
    };

    $scope.cleanModel = function (arg) {
        if (typeof arg == "object") {
            arg = {};
        }
        else {
            $scope['arg'] = [];
        }
    };

    $scope.author = {};
    $scope.book = {};
    $scope.requiredAuthors = [];
    $scope.books = $dataService.getCollection('myBooksCollection') || [];
    $scope.authors = $dataService.getCollection('myAuthorsCollection') || [];
}]);