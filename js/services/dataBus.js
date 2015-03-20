AngularApp.service('dataBus',['dataService', function ($dataService) {
    this.myBooks = [];
    this.myAuthors = [];
    this.removeItems =  {
        itemToRemove: '',
        dataToRemove: ''
    };

    this.getMyBooks = function() {
        this.myBooks = $dataService.getCollection('myBooksCollection');
        return this.myBooks;
    };

    this.getMyAuthors = function () {
        this.myAuthors = $dataService.getCollection('myAuthorsCollection');
        return this.myAuthors;
    };
}]);