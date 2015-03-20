AngularApp.service('dataBus',['dataService', function ($dataService) {
    this.myBooks = [];
    this.myAutors = [];
    this.removeItems =  {
        itemToRemove: '',
        dataToRemove: ''
    };
    this.getMyBooks = function() {
        this.myBooks = $dataService.getCollection('myBooksCollection');
    };
    this.getMyAuthors = function () {
        this.myAuthors = $dataService.getCollection('myAuthorsCollection');
    };
}]);