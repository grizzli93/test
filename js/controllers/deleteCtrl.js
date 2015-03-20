AngularApp.controller('deleteController', ['$scope','dataBus','dataService', function($scope, $dataBus, $dataService) {

    $scope.removeItem = function () {
        $scope.test = '123';
        $scope.lol = '452';

//        debugger;
        if ($dataBus.removeItems.dataToRemove  == 'book') {
            for (var i = 0; i < $dataBus.myBooks.length; i++) {
                if ($dataBus.myBooks[i].id == $dataBus.removeItems.itemToRemove) {
                    $dataBus.myBooks.splice(i, 1);
                    $dataService.setCollection('myBooksCollection', $dataBus.myBooks);
                    return false;
                }
            }
        }
        else {
            for (var i = 0; i < $dataBus.myAuthors.length; i++) {
                if ($dataBus.myAuthors[i].id == $dataBus.removeItems.itemToRemove) {
                    $dataBus.myAuthors.splice(i, 1);
                    $dataService.setCollection('myAuthorsCollection', $dataBus.myAuthors);
                    return false;
                }
            }
        }
        $dataBus.removeItems.itemToRemove = '';
        $dataBus.removeItems.dataToRemove = '';
    };
}]);