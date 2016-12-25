app.factory('getGalleries', ['$http', function($http) {
    
    var demoCards = {
        cards: []
    };
    
    $http.get("./scripts/php/galleryQuery.php")
    .then(function (response) {demoCards.cards = response.data.records;});
    
    return demoCards;
}]);