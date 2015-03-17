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
        $scope.book = {};
        $scope.books = books;
        $scope.author = {};
        $scope.authors = {};
        $scope.requiredAuthors = [];
        $scope.addRequiredAuthor = function (arg) {
            $scope.requiredAuthors.push(arg);
        };
        $http.get('data/data.authors.json').success(function (data) {
            $scope.authors = data;
        });
        $scope.addAuthor = function () {
            $scope.authors.push($scope.author);
            $scope.author = {};
        };
        $scope.addBook = function () {debugger;
            $scope.books.author = $scope.requiredAuthors;
            $scope.books.push($scope.book);
//            $http.put('data/data.books.json', this.books);
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
        $scope.editEntry = function() {

        };
    }])
    .directive('appControls', function() {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'templates/app-controls.html'
        }
    });

    var books = [
        {
            "author": "A.Cash",
            "date": "1998",
            "name": "Winter",
            "id": 1
        },
        {
            "author": "C.Town",
            "date": "1994",
            "name": "Autumn",
            "id": 2
        },
        {
            "author": "B.Sky",
            "date": "1988",
            "name": "Desert",
            "id": 3
        },
        {
            "author": "F.Road",
            "date": "2000",
            "name": "Forest",
            "id": 4
        }

    ]
})();
