AngularApp.controller('dialogController', ['$scope', 'dataBus', function ($scope, $dataBus) {

    $scope.displayDialogContent = {
        displayRemoveAuthor: false,
        displayRemoveBook: false,
        displayEditAuthor: false,
        displayEditBook: false,
        displayAddAuthor: false,
        displayAddBook: false
    };

    $scope.displayContent = function (content) {
        $.each($scope.displayDialogContent, function (key, value) {
            $scope.displayDialogContent[key] = false;
        });
        $scope.displayDialogContent[content] = true;
        $('#myModal').modal();
        return false;
    };
    $scope.setAuthorToRemove = function (id) {
        $scope.authorToRemove = $dataBus.getAuthorNameByID(id)[0];
        $dataBus.setCollectionData('idToRemove', id);
    };
    $scope.setBookToRemove = function (id) {
        $scope.bookToRemove = $dataBus.getBookById(id).name;
        $scope.authorToRemove = $dataBus.getAuthorNameByID($dataBus.getBookById(id).author);
        $dataBus.setCollectionData('idToRemove', id);
    };
    $scope.setAuthorToEdit = function (id) {

    };
    $scope.setBookToEdit = function (id) {

    };
    $scope.returnCurrentDialogTitle = function () {
        var result;
        $.each($scope.displayDialogContent, function (key, value) {
            if ($scope.displayDialogContent[key]) {
                switch (key) {
                    case 'displayAddAuthor':
                        result = 'Add author';
                        break;
                    case 'displayAddBook':
                        result = 'Add book';
                        break;
                    case 'displayRemoveBook':
                        result = 'Confirm your action';
                        break;
                    case 'displayRemoveAuthor':
                        result = 'Confirm your action';
                        break;
                    case 'displayEditBook':
                        result = 'Edit book';
                        break;
                    case 'displayEditAuthor':
                        result = 'Edit author';
                        break;
                }
            }
        });
        return result;
    };
}]);