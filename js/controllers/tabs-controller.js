AngularApp.controller('tabsController', ['$scope', function ($scope) {
    $scope.activeTab = localStorage['activeTab'] || 1;

    $scope.setTab = function (arg) {
        localStorage['activeTab'] = JSON.stringify(arg);
        $scope.activeTab = localStorage['activeTab'];
    };


}]);