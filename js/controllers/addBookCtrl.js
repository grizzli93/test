AngularApp.controller('addBookController', [
    '$scope',
    'dataService',
    'dataBus',
function($scope, $dataService, $dataBus) {

    $scope.addRequiredAuthor = function (arg) {
        for (var i = 0; i < $scope.data.authors.length; i++) {
            if ($scope.data.authors[i].name == arg) {
                $scope.data.authors[i].invisible = true;
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
        for (var j = 0; j < $scope.data.authors.length; j++) {
            if ($scope.data.authors[j].name == arg) {
                $scope.data.authors[j].invisible = false;
            }
        }
    };

    $scope.restoreAuthors = function (arg) {
        for (var i = 0; i < $scope.data.authors.length; i++) {
            $scope.data.authors[i].invisible = false;
        }
        $scope.cleanModel(arg);
    };

    $scope.addBook = function () {
        $scope.book.author = $scope.requiredAuthors;
        $scope.data.books.push($scope.book);
        $dataService.setCollection('myBooksCollection', $scope.data.books);
        $dataBus.getMyBooks();
        $scope.requiredAuthors = [];
        $scope.book = {};
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
    $scope.data = {
        books: $dataBus.myBooks || [],
        authors: $dataBus.myAuthors || []
    }
}]);