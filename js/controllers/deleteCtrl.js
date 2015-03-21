AngularApp.controller('deleteController', [
    '$scope',
    'dataBus',
    'dataService',
    'functionsBus',
    function ($scope, $dataBus, $dataService, $functionsBus) {
        $scope.removeParams = {
            name: $dataBus.removeItems,
            author: $dataBus.removeItems,
            type: $dataBus.removeItems
        };

        $scope.getAuthorById = $functionsBus.getAuthorById;

        $scope.removeItem = function () {
            if ($dataBus.removeItems.dataToRemove == 'book') {
                for (var i = 0; i < $dataBus.myBooks.length; i++) {
                    if ($dataBus.myBooks[i].id == $dataBus.removeItems.idToRemove) {
                        $dataBus.myBooks.splice(i, 1);
                        $dataService.setCollection('myBooksCollection', $dataBus.myBooks);
                        return false;
                    }
                }
            }
            else {
                for (var i = 0; i < $dataBus.myAuthors.length; i++) {
                    if ($dataBus.myAuthors[i].id == $dataBus.removeItems.idToRemove) {
                        $dataBus.myAuthors.splice(i, 1);
                        $dataService.setCollection('myAuthorsCollection', $dataBus.myAuthors);
                        return false;
                    }
                }
            }
            $dataBus.removeItems.idToRemove = '';
            $dataBus.removeItems.dataToRemove = '';
        };
    }]);