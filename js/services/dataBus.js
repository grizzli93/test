AngularApp.service('dataBus', [
    'dataService',
    '$http',
    '$q',
    function ($dataService, $http, $q) {
        var that = this;
        this.authorToRemove = '';
        this.bookToRemove = '';
        this.authorToEdit = '';
        this.bookToEdit = '';
        this.myBooks = [];
        this.myAuthors = [];
        this.editItems = {};
        this.getCollectionData = function(field) {
            return this[field];
        };
        var deferredBooks = $q.defer();
        var deferredAuthors = $q.defer();

        this.getMyBooks = function () {
            if (!( this.myBooks = $dataService.getCollection('myBooksCollection'))) {
                $http.get('data/data.books.json')
                    .then(function (data) {
                        $dataService.setCollection('myBooksCollection', data.data);
                        that.myBooks = $dataService.getCollection('myBooksCollection');
                        deferredBooks.resolve();
                    }, function (data) {
                        deferredBooks.reject(data);
                    });
            } else {
                deferredBooks.resolve();
            }
            return deferredBooks.promise;
        };
        this.getMyAuthors = function () {
            if (!( this.myAuthors = $dataService.getCollection('myAuthorsCollection'))) {
                $http.get('data/data.authors.json')
                    .then(function (data) {
                        $dataService.setCollection('myAuthorsCollection', data.data);
                        that.myAuthors = $dataService.getCollection('myAuthorsCollection');
                        deferredAuthors.resolve();
                    }, function (data) {
                        deferredAuthors.reject(data);
                    });
            } else {
                deferredAuthors.resolve();
            }
            return deferredAuthors.promise;
        };
        this.getAuthorById = function (id) {
            var argument = [];
            angular.isNumber(id) ? argument.push(id) : argument = id;
            var result = [];
            $.each(argument, function (index, value) {
                $.each(that.myAuthors, function (index_in, value_in) {
                    if (that.myAuthors[index_in].id == argument[index]) {
                        result.push(that.myAuthors[index_in].name);
                    }
                });
            });
            return result;
        };
        this.getBookById = function (id) {
            var result;
            $.each(that.myBooks, function (index, value) {
                if (that.myAuthors[index].id == id) {
                    result = that.myBooks[index].name;
                }
            });
            return result;
        };
    }]);