AngularApp.controller('dialogController', ['$scope','dataBus', function ($scope, $dataBus) {

    $scope.displayDialogContent = {
        displayAddAuthor: false,
        displayAddBook: false,
        displayConfirmationDialog: false
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
        for (var i = 0; i < $dataBus.myBooks.length; i++) {
            if ($dataBus.myBooks[i].id == id) {debugger;
                $dataBus.removeItems.authorToRemove = $dataBus.myBooks[i].author;
                $dataBus.removeItems.nameToRemove = $dataBus.myBooks[i].name;
            }
        }
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
                }
            }
        });
        return result;
    };
}]);