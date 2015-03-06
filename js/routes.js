(function () {
    angular.module('newModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/books', {
                    templateUrl: 'templates/pages/books/table.html'
                }
            )
        }]);
})();
