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
    }])

    .controller('appController', ['$scope', function ($scope) {
        $scope.setTab = function (arg) {
            $scope.activeTab = arg;
        };
        $scope.activeTab = 1;
        $scope.showAddBookPanel = false;
        $scope.showAddAuthorPanel = false;
        $scope.toggleAddBookPanel = function () {
            $scope.showAddBookPanel = !$scope.showAddBookPanel;
        };
        $scope.toggleAddAuthorPanel = function () {
            $scope.showAddAuthorPanel = !$scope.showAddAuthorPanel;
        };
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
        $http.get('data/data.authors.json').success(function (data) {
            $scope.authors = data;
        });
        $scope.addAuthor = function () {
            $scope.authors.push($scope.author);
            $scope.author = {};
        };
        $scope.addBook = function () {
            $scope.books.push($scope.book);
            $http.put('data/data.books.json', this.books);
            $scope.book = {};
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
