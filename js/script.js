var AngularApp = angular.module('newModule', ['ngRoute'])
/**
 * Directives
 * */
    .directive('appControls', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'templates/app-controls.html'
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

    .directive('confirmationFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/confirmation-footer.html'
        }
    })

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

    .directive('addBookFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-book-footer.html'
        }
    })

    .directive('addAuthorFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-author-footer.html'
        }
    });
//todo
//валидация + валидация ид книги
//редактирование
//добавление автора
//почему разбиваются буквы
//обложка?
//сортировка?
//циклы наше все?
//асинхронность
//механизм замещения но не роут