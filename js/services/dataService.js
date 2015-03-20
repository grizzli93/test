AngularApp.service('dataService', function() {
    this.getCollection = function (collection) {
        if (localStorage[collection]) {
            return JSON.parse(localStorage[collection]);
        }
    };

    this.setCollection = function (collection, data) {
        localStorage[collection] = angular.toJson(data);
    };

});