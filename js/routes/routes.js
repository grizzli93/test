AngularApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/books', {
            templateUrl: 'templates/pages/books/table.html',
            controller: 'booksController'
        })
        .when('/authors', {
            templateUrl: 'templates/pages/authors/table.html'
        })
        .otherwise({
            redirectTo: '/books'
        });
}]);