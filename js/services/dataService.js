AngularApp.service('dataService', function() {

    var getCollection = function (collection) {
        if (localStorage[collection]) {
            return JSON.parse(localStorage[collection]);
        }
    };

    var setCollection = function (collection, data) {
        localStorage[collection] = JSON.stringify(data);
    };

    return {
        getCollection: getCollection,
        setCollection: setCollection,
    }
});