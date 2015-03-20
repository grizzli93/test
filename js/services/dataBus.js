AngularApp.service('dataBus', function () {
    this.myBooks = [];
    this.myAutors = [];
    this.removeItems =  {
        itemToRemove: '',
        dataToRemove: ''
    };
});