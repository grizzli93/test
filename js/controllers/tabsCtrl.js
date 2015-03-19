AngularApp.controller('tabsController', ['$scope', function ($scope) {
    $scope.tabs = {
        activeTab: localStorage['activeTab'] || 1,
        setTab: function (arg) {
            localStorage['activeTab'] = JSON.stringify(arg);
            this.activeTab = localStorage['activeTab'];
        }
    }
}]);