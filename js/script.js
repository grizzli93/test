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
    }]);
    app.controller('appController', ['$scope', function ($scope) {
        $scope.showAddBookPanel = false;
        $scope.showAddAuthorPanel = false;
        $scope.toggleAddBookPanel = function () {
            $scope.showAddBookPanel = !$scope.showAddBookPanel;
        };
        $scope.toggleAddAuthorPanel = function () {
            $scope.showAddAuthorPanel = !$scope.showAddAuthorPanel;
        };
    }]);

//    angular.module('newModule', [])
    app.directive('addBook', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-book.html'
        }
    });
//    angular.module('newModule', [])
    app.directive('addAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-author.html'
        }
    });
//    angular.module('newModule', [])
    app.controller('booksController', ['$http','$scope', function ($http, $scope) {
        $scope.book = {};
        $scope.author = {};
        var that = $scope;
        $scope.books = books;
//        $http.get('data/data.books.json').success(function (data) {
//            that.books = data;
//        });
        $http.get('data/data.authors.json').success(function (data) {
            that.authors = data;
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
    }]);
    app.directive('appControls', function() {
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
