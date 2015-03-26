AngularApp.controller('deleteController', [
    '$scope',
    'dataBus',
    'dataService',
    function ($scope, $dataBus, $dataService) {
        $scope.removeBook = function () {
            console.log($dataBus.idToRemove + '312');
            for (var i = 0; i < $dataBus.myBooks.length; i++) {
                if ($dataBus.myBooks[i].id == $dataBus.idToRemove ) {
                    $dataBus.myBooks.splice(i, 1);
                    $dataService.setCollection('myBooksCollection', $dataBus.myBooks);
                    return false;
                }
            }
        };
        $scope.removeAuthor = function () {
            for (var i = 0; i < $dataBus.myAuthors.length; i++) {
                if ($dataBus.myAuthors[i].id == $dataBus.idToRemove) {
                    $dataBus.myAuthors.splice(i, 1);
                    $dataService.setCollection('myAuthorsCollection', $dataBus.myAuthors);
                    return false;
                }
            }
        };
    }]);