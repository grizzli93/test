AngularApp.controller('dialogController', ['$scope', function ($scope) {

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