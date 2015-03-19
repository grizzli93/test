AngularApp
    .directive('appControls', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/app-controls.html',
            scope: false
        }
    })

    .directive('dialogWrapper', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialog.html',
            controller: 'dialogController',
            scope: false
        }
    })

    .directive('confirmation', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/confirmation.html',
            controller: 'deleteController',
            scope: false
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