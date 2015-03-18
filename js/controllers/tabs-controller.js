AngularApp.controller('tabsController', ['$scope', function ($scope) {
    $scope.activeTab = 1;
    $scope.setTab = function (arg) {
        $scope.activeTab = arg;
    };
}]);