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
            //$(event.currentTarget).tooltip({title: '123'});
        };

        $scope.editBook = function(id) {
//            dialogSevice.displayContent('displayEditBook');
//            setBookToEdit(id)
            console.log(id);
        };

        $scope.editBook = function(id) {
//            dialogSevice.displayContent('displayEditBook');
//            setBookToEdit(id)
            $('#myModal').modal();
            console.log(id);
        }
}]);