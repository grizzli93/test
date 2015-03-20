AngularApp.service('dataBus',['dataService', function ($dataService) {
    this.myBooks = [];
    this.myAutors = [];
    this.removeItems =  {
        itemToRemove: '',
        dataToRemove: ''
    };
    
    this.getMyBooks = function() {
        if (this.myBooks.length === 0) {
            if (!(this.myBooks = $dataService.getCollection('myBooksCollection'))) {
                this.myBooks = [];
            }
        }
        return this.myBooks;
    };

    this.getMyAuthors = function () {
        if (this.myAuthors.length === 0) {
            if (!(this.myAuthors = $dataService.getCollection('myAuthorsCollection'))) {
                this.myAuthors = [];
            }
        }
        return this.myAuthors;
    };
}]);