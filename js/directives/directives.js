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
    })

    .directive('editBook', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/edit-book.html',
            controller: 'addBookController',
            scope: false
        }
    })
    .directive('repTest', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (scope.$last) setTimeout(function(){
                    $('#preloader').removeClass('preloader');
                    //todo
                    //scope.$emit('onRepeatLast', element, attrs);
                }, 500);
            }
        }
    });