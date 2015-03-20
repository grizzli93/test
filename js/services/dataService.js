AngularApp.service('dataService',['$http', function($http) {
    var that = this;
    this.getCollection = function (collection) {
        if (localStorage[collection]) {
            return JSON.parse(localStorage[collection]);
        }
        else {
            if (collection == 'myBooksCollection') {
                $http.get('data/data.books.json').then(function (data) {
                    that.setCollection('myBooksCollection', data.data);
                });
            }

            if (collection == 'myAuthorsCollection') {
                $http.get('data/data.authors.json').then(function (data) {
                   that.setCollection('myAuthorsCollection', data.data);
                });
            }
        }
    };

    this.setCollection = function (collection, data) {
        localStorage[collection] = JSON.stringify(data);
    };

}]);