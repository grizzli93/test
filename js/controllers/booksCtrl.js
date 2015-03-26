AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataBus',
    function ($http, $scope, $dataBus) {

        $scope.getAuthorNameByID = $dataBus.getAuthorNameByID;

        $dataBus.getMyBooks().then(function() {
            $scope.books =  $dataBus.myBooks;
        });

        $dataBus.getMyAuthors().then(function(){
            $scope.authors = $dataBus.myAuthors;
        });
        $scope.asd = function(arg, event){
            var img = '<img src="'+arg+'"/>';
            $(event.currentTarget).popover({
                content: img,
                trigger: 'hover',
                html: true,
                placement: 'bottom',
                animation: false,
                container : 'body'
            });
        };
        $scope.editBook = function(id) {
//          dialogSevice.displayContent('displayEditBook');
//          setBookToEdit(id)
            console.log(id);
        };
}]);