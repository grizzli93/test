(function () {
    angular.module('newModule', [])
        .directive('addBook', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/add-book.html'
            }
        });
    angular.module('newModule', [])
        .directive('addAuthor', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/add-author.html'
            }
        });
    angular.module('newModule', []).controller('booksController', ['$http', function ($http) {
        this.book = {};
        this.author = {};
        var that = this;
//        this.books = books;
        $http.get('data/data.books.json').success(function (data) {
            that.books = data;
        });
        $http.get('data/data.authors.json').success(function (data) {
            that.authors = data;
        });
        this.addAuthor = function () {
            this.authors.push(this.author);
            this.author = {};
        };
        this.addBook = function () {
            this.books.push(this.book);
            $http.put('data/data.books.json', this.books);
            this.book = {};
        };
    }]);
    angular.module('newModule', []).controller('appController', function () {
        this.showAddBookPanel = false;
        this.showAddAuthorPanel = false;
        this.toggleAddBookPanel = function () {
            this.showAddBookPanel = !this.showAddBookPanel;
        };
        this.toggleAddAuthorPanel = function () {
            this.showAddAuthorPanel = !this.showAddAuthorPanel;
        };
    });

    var books = [
        {
            "author": "A.Cash",
            "date": "1998",
            "name": "Winter",
            "id": 1
        },
        {
            "author": "C.Town",
            "date": "1994",
            "name": "Autumn",
            "id": 2
        },
        {
            "author": "B.Sky",
            "date": "1988",
            "name": "Desert",
            "id": 3
        },
        {
            "author": "F.Road",
            "date": "2000",
            "name": "Forest",
            "id": 4
        }

    ]
})();
