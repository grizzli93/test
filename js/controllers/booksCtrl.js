AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataBus',
    'functionsBus',
    function ($http, $scope, $dataBus, $functionsBus) {

        $scope.getAuthorById = $functionsBus.getAuthorById;

        $scope.editEntry = function () {

        };

        $dataBus.getMyBooks().then(function() {
            $scope.books =  $dataBus.myBooks;
        });

        $dataBus.getMyAuthors().then(function(){
            $scope.authors = $dataBus.myAuthors;
        });

}]);