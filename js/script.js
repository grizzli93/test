(function () {
    var app = angular.module('newModule', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: 'templates/pages/books/table.html'
            })
            .when('/authors', {
                templateUrl: 'templates/pages/authors/table.html'
            })
            .otherwise({
                redirectTo: '/books'
            });
    }])

    .controller('appController', ['$scope', function ($scope) {
        $scope.setTab = function (arg) {
            $scope.activeTab = arg;
        };
        $scope.activeTab = 1;
    }])

    .directive('addBook', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-book.html'
        }
    })

    .directive('addAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-author.html'
        }
    })

    .controller('booksController', ['$http','$scope', function ($http, $scope) {
        $scope.getCollection = function(collection) {
            if (localStorage[collection]) {
                return JSON.parse(localStorage[collection]);
            }
        };
        $scope.saveCollection = function(collection, data) {
            localStorage[collection] = JSON.stringify(data);
        };

        if (!$scope.getCollection('myBooksCollection')) {
            $http.get('data/data.books.json').success(function (data) {
                $scope.saveCollection('myBooksCollection', data);
            });
        }
        $scope.book = {};
        $scope.books = $scope.getCollection('myBooksCollection');
        $scope.author = {};
        $scope.authors = {};
        $scope.requiredAuthors = [];
        $scope.addRequiredAuthor = function (arg) {
            for (var i = 0; i < $scope.authors.length; i++) {
                if ($scope.authors[i].name == arg) {
                    $scope.authors[i].invisible = true;
                }
            }
            $scope.requiredAuthors.push(arg);
        };
        $scope.removeRequiredAuthor = function (arg) {
            for (var i = 0; i < $scope.requiredAuthors.length; i++) {
                if ($scope.requiredAuthors[i] == arg) {
                    $scope.requiredAuthors.splice(i, 1);
                    $scope.authors[i].invisible = false;
                }
            }
        };
        $scope.addAuthor = function () {
            $scope.authors.push($scope.author);
            $scope.author = {};
        };
        $scope.addBook = function () {
            $scope.book.author = $scope.requiredAuthors;
            $scope.books.push($scope.book);
            $scope.saveCollection($scope.books);
            $scope.requiredAuthors = [];
            $scope.book = {};
        };
        $scope.getAuthorId = function(arg) {
            for (var i = 0; i < $scope.authors.length; i++) {
                if ($scope.authors[i].name == arg) {
                    return $scope.authors[i].id;
                }
            }
        };
        $scope.removeBook = function (arg) {
            for (var i = 0; i < $scope.books.length; i++) {
                if ($scope.books[i].id == arg) {
                    $scope.books.splice(i, 1);
                }
            }
        };
        $scope.restoreAuthors = function (arg) {
            for (var i = 0; i < $scope.authors.length; i++) {
                $scope.authors[i].invisible = false;
            }
            $scope.cleanModel(arg);
        };
        $scope.editEntry = function() {

        };
        $scope.cleanModel = function(arg) {
            if (typeof arg == "object") {
                arg = {};
            }
            else {
                $scope['arg'] = [];
            }
        };
    }])
    .directive('appControls', function() {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'templates/app-controls.html'
        }
    });
})();
//todo реализовать localstorage
//удаление
//валидация + валидация ид книги
//редактирование
//добавление автора
//почему разбиваются букви
//обложка?
//сортировка?
//цикли наше все?
//No results found for
//
//