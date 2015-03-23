AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataBus',
    'functionsBus',
    function ($http, $scope, $dataBus, $functionsBus) {

        $scope.getAuthorById = $functionsBus.getAuthorById;

        $dataBus.getMyBooks().then(function() {
            $scope.books =  $dataBus.myBooks;
        });

        $dataBus.getMyAuthors().then(function(){
            $scope.authors = $dataBus.myAuthors;
        });
        $scope.asd = function(arg, event){
            //$(event.currentTarget).tooltip();
        }

}]);