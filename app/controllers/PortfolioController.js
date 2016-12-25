app.controller('PortfolioController', ['$scope', 'getGalleries', '$http', function($scope, getGalleries, $http) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    //var masonryData = $('.grid').data('masonry'); //used for testing presence of masonry
    //alert("masonry: " + masonryData);
    var masonryParams = {
        itemSelector: '.gallery-card',
        columnWidth: '.portfolio-grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    
    $(document).ready(function() {
        
        // following value persists if data doesn't load properly
        $scope.cards = [
            {
                name: 'no galleries available at this time'
            }
        ];
        
        // failed service attempt. preserving because it SHOULD be fixed at some point
        /*$scope.cards = getGalleries.cards;
        alert("value of cards: " + $scope.cards);*/
        //$scope.cards = fakeCards.cards;
    
        // preferably, this data should come from a service component, not present in the controller
        $scope.selectedCategory = "featured";
        $http.get("./scripts/php/galleryQuery.php?tag=" + $scope.selectedCategory)
        .then(function (response) 
          {
            $scope.cards = response.data.records;
          });
        
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
    });
    
    /*$(window).load(function() {
        alert("window ready");
    });*/
    
    $scope.handleCategory = function(eventObject) {
        var element = eventObject.target;
        var isSelected = $(element).hasClass("categorySelected");
        
        if (!isSelected) {
            $('.categorySelected').removeClass("categorySelected");
            $(element).addClass("categorySelected");
            $scope.selectedCategory = element.getAttribute("data-category");
            updatePortfolioView($scope.selectedCategory);
        }
    };
    
    $scope.handleCategoryMobile = function() {
        //alert("current category: " + $scope.selectedCategory);
        updatePortfolioView($scope.selectedCategory);
    };
    
    function updatePortfolioView(category) {
        
    };
    
}]);