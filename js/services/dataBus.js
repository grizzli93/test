AngularApp.service('dataBus', [
    'dataService',
    '$http',
    '$q',
    function ($dataService, $http, $q) {
        var that = this;
        this.myBooks = [];
        this.myAuthors = [];
        this.removeItems = {
            idToRemove: '',
            dataToRemove: '',
            nameToRemove: '',
            authorToRemove: ''
        };
        this.editItems = {};

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
    }]);