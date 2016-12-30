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
            
            var imageArray = $scope.gallery.images.split(",");
            imageArray.forEach(function(item, index) {
                
                //console.log("pushing item [" + index + "]");
                $scope.cards.push(
                    { image: $scope.gallery.location + '/' + item }
                );
            });
        });
            
        // alternative method: try detecting for a masonry instance, broadcast an event, and then take load animation down
        // OR use .progress to determine if image is last one in set and THEN trigger masonry

        /*$('.grid').imagesLoaded(function() {

            var browserWindow = $(window);

            if (browserWindow.width() >= tabletWidth)
            {
                $('.grid').masonry(masonryParams);
                // reset layout after a few seconds so that images don't stay stacked.
                setTimeout(function() { $('.grid').masonry('layout'); }, 5000);
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
        });*/
            
            
            ////////////////////////////////
            
            /*// init Masonry
            // Initialize Masonry, then trigger layout after each image loads.
            var $grid = $('.grid').masonry({
              // options...
            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress( function() {
              $grid.masonry('layout');
            });*/
            
            ////////////////////////////////
    };
    
    $scope.enlargeImage = function(imagePath) {
        $scope.focusImage = imagePath;
        $('#imageView').css({"display": "block"});
    };
    
    $scope.closeImageView = function() {
        $('#imageView').css({"display": "none"});
    };
    
}]);