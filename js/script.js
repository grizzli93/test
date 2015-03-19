var AngularApp = angular.module('newModule', ['ngRoute'])
/**
 * Directives
 * */
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
            templateUrl: 'templates/add-book.html'
        }
    })

    .directive('addAuthor', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/add-author.html'
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