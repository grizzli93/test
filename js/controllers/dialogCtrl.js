AngularApp.controller('dialogController', ['$scope','dataBus', function ($scope, $dataBus) {

    $scope.displayDialogContent = {
        displayAddAuthor: false,
        displayAddBook: false,
        displayConfirmationDialog: false,
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

    $scope.setItemsToRemove = function(id, type) {
        $dataBus.removeItems.idToRemove = id;
        $dataBus.removeItems.dataToRemove = type;
        var objType;
        type == 'book' ? objType = 'myBooks': objType = 'myAuthors';
        $.each($dataBus[objType], function(index, value) {
            if ($dataBus[objType][index].id == id) {
                $dataBus.removeItems.authorToRemove = $dataBus.myBooks[index].author;
                $dataBus.removeItems.nameToRemove = $dataBus.myBooks[index].name;
            }
        });
    };

    $scope.setItemsToEdit = function(params, type) {
        $dataBus.editItems = params;
        $dataBus.editItems.type = type;
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
                    case 'displayConfirmationDialog':
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