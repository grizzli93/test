AngularApp.controller('addAuthorController', [
    '$scope',
    'dataService',
    'dataBus',
    function ($scope, $dataService, $dataBus) {
        $scope.addAuthor = function () {
            $dataBus.myAuthors.push($scope.author);
            $dataService.setCollection('myAuthorsCollection', $dataBus.myAuthors);
            //$dataBus.getMyAuthors();
            $scope.author = {};
        };
        $scope.author = {};
        $scope.authors = [];
    }]);

