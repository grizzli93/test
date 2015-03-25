AngularApp.service('functionsBus', ['dataBus', function($dataBus) {
    this.getAuthorById = function (arg) {
        var argument = [];
        angular.isNumber(arg) ? argument.push(arg) : argument = arg;

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
    this.getBookById = function (arg) {
        $.each($dataBus.myBooks, function (index, value) {
            if ($dataBus.myAuthors[index].id == arg) {
                return $dataBus.myBooks[index].name;
            }
        });
    };
}]);