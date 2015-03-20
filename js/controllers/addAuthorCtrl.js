AngularApp.controller('addAuthorController', ['$scope','dataService','dataBus', function($scope, $dataService, $dataBus){
    $scope.addAuthor = function () {
        $scope.authors.push($scope.author);
        $dataService.setCollection('myAuthorsCollection', $scope.authors);
        $dataBus.getMyAuthors();
        $scope.author = {};
    };
}]);

