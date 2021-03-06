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
    .directive('removeBookDialog', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialogs/remove-book.html',
            controller: 'deleteController',
            scope: false
        }
    })
    .directive('removeAuthorDialog', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialogs/remove-author.html',
            controller: 'deleteController',
            scope: false
        }
    })
    .directive('addBook', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialogs/add-book.html',
            controller: 'addBookController',
            scope: false
        }
    })
    .directive('addAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialogs/add-author.html',
            controller: 'addAuthorController',
            scope: false
        }
    })
    .directive('editBook', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialogs/edit-book.html',
            controller: 'addBookController',
            scope: false
        }
    })
    .directive('editAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dialogs/edit-author.html',
            controller: 'addAuthorController',
            scope: false
        }
    });
//    .directive('repTest', function() {
//        return {
//            restrict: 'A',
//            link: function(scope, element, attrs) {
//                if (scope.$last) setTimeout(function(){
//                    $('#preloader').removeClass('preloader');
//                    //scope.$emit('onRepeatLast', element, attrs);
//                }, 500);
//            }
//        }
//    });