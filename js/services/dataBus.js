AngularApp.service('dataBus', [
    'dataService',
    '$http',
    '$q',
    function ($dataService, $http, $q) {
        var that = this;
        this.myBooks = [];
        this.myAuthors = [];
        this.removeItems = {
            itemToRemove: '',
            dataToRemove: '',
            nameToRemove: '',
            authorToRemove: ''
        };
        this.editItems = {
            itemToRemove: '',
            dataToRemove: '',
            nameToRemove: '',
            authorToRemove: ''
        };

        var deffered = $q.defer();

        this.getMyBooks = function () {
            if (!( this.myBooks = $dataService.getCollection('myBooksCollection'))) {
                $http.get('data/data.books.json')
                    .then(function (data) {
                        $dataService.setCollection('myBooksCollection', data.data);
                        that.myBooks = $dataService.getCollection('myBooksCollection');
                        deffered.resolve();
                    }, function (data) {
                        deffered.reject(data);
                    });
            } else {
                deffered.resolve();
            }
            return deffered.promise;
        };

        this.getMyAuthors = function () {
            if (!( this.myAuthors = $dataService.getCollection('myAuthorsCollection'))) {
                $http.get('data/data.authors.json')
                    .then(function (data) {
                        $dataService.setCollection('myAuthorsCollection', data.data);
                        that.myAuthors = $dataService.getCollection('myAuthorsCollection');
                        deffered.resolve();
                    }, function (data) {
                        deffered.reject(data);
                    });
            } else {
                deffered.resolve();
            }
            return deffered.promise;
        };
    }]);