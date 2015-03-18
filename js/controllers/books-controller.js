AngularApp.controller('booksController', ['$http', '$scope', function ($http, $scope) {

    $scope.getCollection = function (collection) {
        if (localStorage[collection]) {
            return JSON.parse(localStorage[collection]);
        }
    };

    $scope.saveCollection = function (collection, data) {
        localStorage[collection] = JSON.stringify(data);
    };

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

    $scope.addAuthor = function () {
        $scope.authors.push($scope.author);
        $scope.saveCollection('myAuthorsCollection', $scope.authors);
        $scope.author = {};
        $scope.authors = $scope.getCollection('myAuthorsCollection') || [];

    };

    $scope.addBook = function () {
        $scope.book.author = $scope.requiredAuthors;
        $scope.books.push($scope.book);
        $scope.saveCollection('myBooksCollection', $scope.books);
        $scope.requiredAuthors = [];
        $scope.book = {};
        $scope.books = $scope.getCollection('myBooksCollection') || [];
    };

    $scope.getAuthorId = function (arg) {
        for (var i = 0; i < $scope.authors.length; i++) {
            if ($scope.authors[i].name == arg) {
                return $scope.authors[i].id;
            }
        }
    };

    $scope.restoreAuthors = function (arg) {
        for (var i = 0; i < $scope.authors.length; i++) {
            $scope.authors[i].invisible = false;
        }
        $scope.cleanModel(arg);
    };

    $scope.editEntry = function () {

    };

    $scope.cleanModel = function (arg) {
        if (typeof arg == "object") {
            arg = {};
        }
        else {
            $scope['arg'] = [];
        }
    };

    $scope.removeItem = function (id, type) {
        if (type == 'book') {
            for (var i = 0; i < $scope.books.length; i++) {
                if ($scope.books[i].id == id) {
                    $scope.books.splice(i, 1);
                    $scope.saveCollection('myBooksCollection', $scope.books);
                    return false;
                }
            }
        }
        else {
            for (var i = 0; i < $scope.authors.length; i++) {
                if ($scope.authors[i].id == id) {
                    $scope.authors.splice(i, 1);
                    $scope.saveCollection('myAuthorsCollection', $scope.authors);
                    return false;
                }
            }
        }
        $scope.idToRemove = '';
        $scope.typeToRemove = '';
    };

    if (!$scope.getCollection('myBooksCollection')) {
        $http.get('data/data.books.json').success(function (data) {
            $scope.saveCollection('myBooksCollection', data);
        });
    }
    if (!$scope.getCollection('myAuthorsCollection')) {
        $http.get('data/data.authors.json').success(function (data) {
            $scope.saveCollection('myAuthorsCollection', data);
        });
    }

    $scope.book = {};
    $scope.books = $scope.getCollection('myBooksCollection') || [];
    $scope.author = {};
    $scope.authors = $scope.getCollection('myAuthorsCollection') || [];
    $scope.requiredAuthors = [];
    $scope.itemToRemove = {
        idToRemove: '',
        typeToRemove: ''
    };
}]);