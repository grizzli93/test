(function () {
    window.app = angular.module('newModule', ['ngRoute']);

        app.controller('appController', ['$scope', function ($scope) {
            $scope.activeTab = 1;
            $scope.setTab = function (arg) {
                $scope.activeTab = arg;
            };

            $scope.displayDialogContent = {
                displayAddAuthor: false,
                displayAddBook: false,
                displayConfirmationDialog: false
            };
            $scope.displayContent = function (content) {
                $.each($scope.displayDialogContent, function (key, value) {
                    $scope.displayDialogContent[key] = false;
                });
                $scope.displayDialogContent[content] = true;
                return false;
            };
            $scope.returnCurrentDialogTitle = function () {
                var result;
                $.each($scope.displayDialogContent, function (key, value) {
                    if ($scope.displayDialogContent[key]) {
                        switch (key) {
                            case 'displayAddAuthor':
                                result = 'Add author';
                                break;
                            case 'displayAddBook':
                                result = 'Add book';
                                break;
                            case 'displayConfirmationDialog':
                                result = 'Confirm your action';
                                break;
                        }
                    }
                });
                return result;
            };
        }])

        .controller('booksController', ['$http', '$scope', function ($http, $scope) {
            $scope.getCollection = function (collection) {
                if (localStorage[collection]) {
                    return JSON.parse(localStorage[collection]);
                }
            };
            $scope.saveCollection = function (collection, data) {
                localStorage[collection] = JSON.stringify(data);
            };

            if (!$scope.getCollection('myBooksCollection')) {
                $http.get('data/data.books.json').success(function (data) {
                    $scope.saveCollection('myBooksCollection', data);
                });
            }
            if (!$scope.getCollection('myAuthorsCollection')) {
                $http.get('data/data.authors.json').success(function (data) {
                    $scope.saveCollection('myAuthorsCollection', data);
                });
            }
            $scope.itemToRemove = {
                idToRemove: '',
                typeToRemove: ''
            };

            $scope.removeItem = function (id, type) {
                debugger;
                if (type == 'book') {
                    for (var i = 0; i < $scope.books.length; i++) {
                        if ($scope.books[i].id == id) {
                            $scope.books.splice(i, 1);
                            $scope.saveCollection('myBooksCollection', $scope.books);
                            return false;
                        }
                    }
                }
                else {
                    for (var i = 0; i < $scope.authors.length; i++) {
                        if ($scope.authors[i].id == id) {
                            $scope.authors.splice(i, 1);
                            $scope.saveCollection('myAuthorsCollection', $scope.authors);
                            return false;
                        }
                    }
                }
                $scope.idToRemove = '';
                $scope.typeToRemove = '';
            };

            $scope.book = {};
            $scope.books = $scope.getCollection('myBooksCollection') || [];
            $scope.author = {};
            $scope.authors = $scope.getCollection('myAuthorsCollection') || [];
            $scope.requiredAuthors = [];

            $scope.addRequiredAuthor = function (arg) {
                for (var i = 0; i < $scope.authors.length; i++) {
                    if ($scope.authors[i].name == arg) {
                        $scope.authors[i].invisible = true;
                    }
                }
                $scope.requiredAuthors.push(arg);
            };

            $scope.removeRequiredAuthor = function (arg) {
                for (var i = 0; i <= $scope.requiredAuthors.length; i++) {
                    if ($scope.requiredAuthors[i] == arg) {
                        $scope.requiredAuthors.splice(i, 1);
                    }
                }
                for (var j = 0; j < $scope.authors.length; j++) {
                    if ($scope.authors[j].name == arg) {
                        $scope.authors[j].invisible = false;
                    }
                }
            };
            $scope.addAuthor = function () {
                debugger;
                $scope.authors.push($scope.author);
                $scope.saveCollection('myBooksCollection', $scope.authors);
                $scope.author = {};
                $scope.authors = $scope.getCollection('myAuthorsCollection') || [];

            };

            $scope.addBook = function () {
                $scope.book.author = $scope.requiredAuthors;
                $scope.books.push($scope.book);
                $scope.saveCollection('myBooksCollection', $scope.books);
                $scope.requiredAuthors = [];
                $scope.book = {};
                $scope.books = $scope.getCollection('myBooksCollection') || [];
            };

            $scope.getAuthorId = function (arg) {
                for (var i = 0; i < $scope.authors.length; i++) {
                    if ($scope.authors[i].name == arg) {
                        return $scope.authors[i].id;
                    }
                }
            };

            $scope.restoreAuthors = function (arg) {
                for (var i = 0; i < $scope.authors.length; i++) {
                    $scope.authors[i].invisible = false;
                }
                $scope.cleanModel(arg);
            };

            $scope.editEntry = function () {

            };

            $scope.cleanModel = function (arg) {
                if (typeof arg == "object") {
                    arg = {};
                }
                else {
                    $scope['arg'] = [];
                }
            };
        }])

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
        })

})();
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