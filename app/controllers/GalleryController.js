app.controller('GalleryController', ['$scope', '$routeParams', '$http',  function($scope, $routeParams, $http) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    var masonryParams = {
        itemSelector: '.image-card',
        columnWidth: '.gallery-grid-sizer',
        percentPosition: true,
        gutter: 0
    };

    $(document).ready(function() {
        $scope.cards = [];
        loadGallery($routeParams.id);
    });
    
    function loadGallery(id) {
         
        // failed service attempt. preserving because it SHOULD be fixed at some point
        /*$scope.cards = getGalleries.cards;
        alert("value of cards: " + $scope.cards);*/
        //$scope.cards = fakeCards.cards;
    
        // preferably, this data should come from a service component utilized by this method, 
        // not directlypresent in the controller
       
        
        $http.get("./scripts/php/galleryQuery.php?id=" + id)
        .then(function (response) {
            console.log("gallery loaded successfuly");
            $scope.gallery = response.data.records[0];
            
            $('#galleryViewBackground')
                .css({"background-image" : 'url(' + $scope.gallery.location + '/' + $scope.gallery.cover + ')'});
            
            var imageArray = $scope.gallery.images.split(",");
            imageArray.forEach(function(item, index) {
                $scope.cards.push(
                    { image: $scope.gallery.location + '/' + item }
                );
            });
            
            $('.grid').imagesLoaded( function() {
                
                var browserWindow = $(window);

                if (browserWindow.width() >= tabletWidth)
                    $('.grid').masonry(masonryParams);

                // adjust masonryJS on resize
                browserWindow.resize(function() {
                    if (browserWindow.width() < tabletWidth)
                        $('.grid').masonry('destroy');
                    else
                        $('.grid').masonry(masonryParams);
                });
            
                setTimeout(function() {
                    $('.grid').masonry('layout');
                    $('#galleryViewContainer').css({"opacity" : "1"});
                    $('#loaderContainer').css({"opacity" : "0"});
                }, 6000);
            });          
        })
        .catch(function(err){
            
            console.log("error loading gallery.", err);
        });
    };
    
    $scope.enlargeImage = function(imagePath) {
        $scope.focusImage = imagePath;
        $('#imageView').css({"display": "block"});
    };
    
    $scope.closeImageView = function() {
        $('#imageView').css({"display": "none"});
    };
    
}]);