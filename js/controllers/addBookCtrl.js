AngularApp.controller('addBookController', [
    '$scope',
    'dataService',
    'dataBus',
function($scope, $dataService, $dataBus) {

    $scope.addRequiredAuthor = function (arg) {
        for (var i = 0; i < $scope.data.authors.length; i++) {
            if ($scope.data.authors[i].name == arg) {
                $scope.data.authors[i].invisible = true;
                $scope.requiredAuthors.push($scope.data.authors[i]);
                $scope.requiredAuthorsId.push($scope.data.authors[i].id);
            }
        }
    };
    $scope.removeRequiredAuthor = function (arg) {
        for (var i = 0; i <= $scope.requiredAuthors.length; i++) {
            if ($scope.requiredAuthors[i].id == arg) {
                $scope.requiredAuthors.splice(i, 1);
            }
        }
        for (var j = 0; j < $scope.data.authors.length; j++) {
            if ($scope.data.authors[j].id == arg) {
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
        $scope.book.author = $scope.requiredAuthorsId;
        $dataBus.myBooks.push($scope.book);
        $dataService.setCollection('myBooksCollection', $dataBus.myBooks);
        $scope.requiredAuthors = [];
        $scope.requiredAuthorsId = [];
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

    $scope.editData = {
        editBook: $dataBus.editItems
    };

    $scope.author = {};
    $scope.book = {};
    $scope.requiredAuthors = [];
    $scope.requiredAuthorsId = [];
    $scope.data = {
        books: $dataBus.myBooks || [],
        authors: $dataBus.myAuthors || []
    }
}]);