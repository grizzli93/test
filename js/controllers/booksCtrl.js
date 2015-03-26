AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataBus',
    function ($http, $scope, $dataBus) {

        $scope.getAuthorById = $dataBus.getAuthorById;

        $dataBus.getMyBooks().then(function() {
            $scope.books =  $dataBus.myBooks;
        });

        $dataBus.getMyAuthors().then(function(){
            $scope.authors = $dataBus.myAuthors;
        });
        $scope.asd = function(arg, event){
            //$(event.currentTarget).tooltip({title: '123'});
        }

}]);