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
            
            $scope.gallery.images.split(",").forEach(function(item, index) {
                $scope.cards.push(
                    { image: $scope.gallery.location + '/' + item }
                );
            }); 
            
            // alternative method: try detecting for a masonry instance, broadcast an event, and then take load animation down
            // OR use .progress to determine if image is last one in set and THEN trigger masonry
            
            $('.grid').imagesLoaded().always( function( instance ) {
            
                var browserWindow = $(window);

                if (browserWindow.width() >= tabletWidth)
                {
                    $('.grid').masonry(masonryParams);
                }

                // adjust masonryJS on resize
                browserWindow.resize(function() {
                    if (browserWindow.width() < tabletWidth)
                    {
                        $('.grid').masonry('destroy');
                    }
                    else
                        $('.grid').masonry(masonryParams);
                });
            });
            // $('.grid').masonry(masonryParams);
            
            
            ////////////////////////////////
            
            /*// init Masonry
            // Initialize Masonry, then trigger layout after each image loads.
            var $grid = $('.grid').masonry({
              // options...
            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress( function() {
              $grid.masonry('layout');
            });
            
            
            // Or, initialize Masonry after all images have been loaded.
            var $grid = $('.grid').imagesLoaded( function() {
                
                // init Masonry after all images have loaded
                console.log("calling masonry");
                $grid.masonry(masonryParams);
                console.log("initialized masonry");
            });*/
            
            ////////////////////////////////
            
            /*setTimeout(function() {
                console.log("calling masonry");
                $('.grid').masonry(masonryParams);
            }, 10000);*/
            
          });
    };
    
    $scope.enlargeImage = function(imagePath) {
        $scope.focusImage = imagePath;
        $('#imageView').css({"display": "block"});
    };
    
    $scope.closeImageView = function() {
        $('#imageView').css({"display": "none"});
    };
    
    /*$scope.$on('$viewContentLoaded', function() {
        alert("viewcontentloaded test");
        //loadGallery($routeParams.id);
    });*/
    
}]);