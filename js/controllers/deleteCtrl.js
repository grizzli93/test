AngularApp.controller('deleteController', [
    '$scope',
    'dataBus',
    'dataService',
    function ($scope, $dataBus, $dataService) {
        //todo
//        $scope.bookToRemove = $dataBus.bookToRemove;
        $scope.bookToRemove = $dataBus.getCollectionData('bookToRemove');
        $scope.bookToEdit = $dataBus.bookToEdit;
        $scope.authorToRemove = $dataBus.authorToRemove;
        $scope.authorToEdit = $dataBus.authorToEdit;

        $scope.getAuthorById = $dataBus.getAuthorById;
        $scope.getBookById = $dataBus.getBookById;

        $scope.removeBook = function () {
            for (var i = 0; i < $dataBus.myBooks.length; i++) {
                if ($dataBus.myBooks[i].id == $dataBus.removeItems.idToRemove) {
                    $dataBus.myBooks.splice(i, 1);
                    $dataService.setCollection('myBooksCollection', $dataBus.myBooks);
                    return false;
                }
            }
        };

        $scope.removeAuthor = function () {
            for (var i = 0; i < $dataBus.myAuthors.length; i++) {
                if ($dataBus.myAuthors[i].id == $dataBus.removeItems.idToRemove) {
                    $dataBus.myAuthors.splice(i, 1);
                    $dataService.setCollection('myAuthorsCollection', $dataBus.myAuthors);
                    return false;
                }
            }
        };
        $dataBus.removeItems.idToRemove = '';
    }]);