AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataBus',
    function ($http, $scope, $dataBus) {

        //$scope.getAuthorId = function (arg) {
        //    for (var i = 0; i < $scope.authors.length; i++) {
        //        if ($scope.authors[i].name == arg) {
        //            return $scope.authors[i].id;
        //        }
        //    }
        //};

        $scope.editEntry = function () {

        };

        $dataBus.getMyBooks().then(function() {
            $scope.books =  $dataBus.myBooks;
        });

        $dataBus.getMyAuthors().then(function(){
            $scope.authors = $dataBus.myAuthors;
        });

}]);