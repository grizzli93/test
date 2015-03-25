AngularApp.controller('dialogController', ['$scope','dataBus', function ($scope, $dataBus) {

    $scope.displayDialogContent = {
        displayAddAuthor: false,
        displayAddBook: false,
        displayRemoveAuthor: false,
        displayRemoveBook: false,
        displayEditAuthor: false,
        displayEditBook: false
    };

    $scope.displayContent = function (content) {
        $.each($scope.displayDialogContent, function (key, value) {
            $scope.displayDialogContent[key] = false;
        });
        $scope.displayDialogContent[content] = true;
        return false;
    };
    $scope.setAuthorToRemove = function(id) {
        $dataBus.authorToRemove = id;
    };
    $scope.setBookToRemove = function(id) {debugger;
        $dataBus.bookToRemove = id;
    };
    $scope.setAuthorToEdit = function(id) {
        $dataBus.authorToEdit = id;
    };
    $scope.setBookToEdit = function(id) {
        $dataBus.bookToEdit = id;
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