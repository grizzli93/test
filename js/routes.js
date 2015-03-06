(function () {
    angular.module('newModule', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/books', {
                    templateUrl: 'templates/pages/books/table.html'
                }
                )
        });
})();
