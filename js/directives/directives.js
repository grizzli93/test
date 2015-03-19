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
            templateUrl: 'templates/dialog.html'
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
            controller: 'addBookController'
        }
    })

    .directive('addAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-author.html',
            controller: 'addAuthorController'
        }
    });