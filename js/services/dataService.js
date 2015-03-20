AngularApp.service('dataService',['$http', function($http) {
    this.getCollection = function (collection) {
        if (localStorage[collection]) {
            return JSON.parse(localStorage[collection]);
        }
    };

    this.setCollection = function (collection, data) {
        localStorage[collection] = angular.toJson(data);
    };

}]);