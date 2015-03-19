AngularApp.controller('addAuthorController', ['$scope','dataService', function($scope, $dataService){
    $scope.addAuthor = function () {
        $scope.authors.push($scope.author);
        $dataService.setCollection('myAuthorsCollection', $scope.authors);
        $scope.author = {};
    };
}]);

