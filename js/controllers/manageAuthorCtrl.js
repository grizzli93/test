AngularApp.controller('addAuthorController', [
    '$scope',
    'dataService',
    'dataBus',
    function ($scope, $dataService, $dataBus) {
        $scope.addAuthor = function () {
            $dataBus.myAuthors.push($scope.author);
            $dataService.setCollection('myAuthorsCollection', $dataBus.myAuthors);
            $scope.author = {};
        };
        $scope.author = {};
        $scope.authors = [];
    }]);

