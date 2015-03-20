AngularApp.controller('booksController', [
    '$http',
    '$scope',
    'dataBus',
    function ($http, $scope, $dataBus) {

        $scope.getAuthorById = function (arg) {
            var argument = [];
            typeof(arg) == 'number' ? argument.push(arg) : argument = arg;

            var result = [];
            $.each(argument, function (index, value) {
                $.each($dataBus.myAuthors, function (index_in, value_in) {
                    if ($dataBus.myAuthors[index_in].id == argument[index]) {
                        result.push($dataBus.myAuthors[index_in].name);
                    }
                });
            });
            return result;
        };

        $scope.editEntry = function () {

        };

        $dataBus.getMyBooks().then(function() {
            $scope.books =  $dataBus.myBooks;
        });

        $dataBus.getMyAuthors().then(function(){
            $scope.authors = $dataBus.myAuthors;
        });

}]);