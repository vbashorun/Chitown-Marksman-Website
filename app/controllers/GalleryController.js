app.controller('GalleryController', ['$scope', '$routeParams', '$http',  function($scope, $routeParams, $http) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    var masonryParams = {
        itemSelector: '.image-card',
        columnWidth: '.gallery-grid-sizer',
        percentPosition: true,
        gutter: 0
    };

    $(document).ready(function() {
        
        console.log("gallery controller: document ready");
        
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

        /*$scope.cards = [

            {
                image: "./images/galleries/urban_playground/img_5360.jpg"
            },
            {
                image: "./images/galleries/urban_playground/img_5328.jpg"
            },
            {
                image: "./images/galleries/urban_playground/img_5375.jpg"
            },
            {
                image: "./images/galleries/urban_playground/img_5379.jpg"
            },
            {
                image: "./images/galleries/urban_playground/img_5435.jpg"
            },
            {
                image: "./images/galleries/urban_playground/img_5482.jpg"
            }
        ];*/
        
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
                
                console.log("imagesLoaded event triggered");
            
                /*setTimeout(function() {
                    console.log("resetting masonry layout");
                    $('.grid').masonry('layout');
                }, 8000);*/
            });
            
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