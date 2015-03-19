AngularApp
    .directive('appControls', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'templates/app-controls.html',
            controller: 'tabsController'
        }
    })

    .directive('dialogWrapper', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialog.html',
            controller: 'dialogController'
        }
    })

    .directive('confirmation', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/confirmation.html'
        }
    })

    .directive('addBook', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-book.html',
            controller: 'addBookController',
            scope: false
        }
    })

    .directive('addAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-author.html',
            controller: 'addAuthorController',
            scope: false
        }
    });