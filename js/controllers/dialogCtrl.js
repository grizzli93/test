AngularApp.controller('dialogController', ['$scope','dataBus', function ($scope, $dataBus) {

    $scope.displayDialogContent = {
        displayAddAuthor: false,
        displayAddBook: false,
        displayConfirmationDialog: false,
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
        $dataBus.removeItems.itemToRemove = id;
        $dataBus.removeItems.dataToRemove = type;
        $.each($dataBus.myBooks, function(index, value) {
            if ($dataBus.myBooks[index].id == id) {
                $dataBus.removeItems.authorToRemove = $dataBus.myBooks[index].author;
                $dataBus.removeItems.nameToRemove = $dataBus.myBooks[index].name;
            }
        });
    };

    $scope.setItemsToEdit = function(id, type) {
        $dataBus.editItems.itemToEdit = id;
        $dataBus.editItems.dataToEdit = type;
        $.each($dataBus.myBooks, function(index, value) {
            if ($dataBus.myBooks[index].id == id) {
                $dataBus.editItems.authorToEdit = $dataBus.myBooks[index].author;
                $dataBus.editItems.nameToEdit = $dataBus.myBooks[index].name;
                $dataBus.editItems.dateToEdit = $dataBus.myBooks[index].date;
            }
        });
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
                }
            }
        });
        return result;
    };
}]);