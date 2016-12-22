// utilize $routeParams to get info for the gallery to serve up. may need to reference angular docs
app.controller('GalleryController', ['$scope', function($scope) { 
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    var masonryParams = {
        itemSelector: '.image-card',
        columnWidth: '.gallery-grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    
    var imageRoute = "../images/";
    
    $scope.galleryName = "Urban Playground";
    $scope.galleryDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem vehicula, "
                          + "venenatis libero eu, maximus mauris. In pellentesque blandit metus eu dictum. "
                          + "Donec tristique augue placerat, semper dolor eu, cursus ligula.";
    
    $scope.cards = [
        
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
    ];
    
    $scope.focusImage = imageRoute + "marksman-slide-4.jpg";
    
    $(document).ready(function() {
        //alert("document ready");
        
        /*$(window).load(function() {
            alert("window loaded");
            $('.grid').masonry(masonryParams);
        });*/
        
        /*$('.grid').masonry(masonryParams);
        var masonryData = $('.grid').data('masonry');
        alert("masonry: " + masonryData);*/
        
        $('#galleryViewBackground').css({"background-image" : 'url(' + imageRoute + "marksman-slide-4.jpg" + ')'});
        
        $('.grid').imagesLoaded().always( function( instance ) {
            // images have loaded
            //alert("window loaded");
            
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
        
    });
    
    $scope.enlargeImage = function(imagePath) {
        $scope.focusImage = imagePath;
        $('#imageView').css({"display": "block"});
    };
    
    $scope.closeImageView = function() {
        $('#imageView').css({"display": "none"});
    };
    
}]);