app.controller('PortfolioController', ['$scope', '$http', function($scope, $http) {
    
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
        
        $scope.selectedCategory = "featured";
        
        updatePortfolioView($scope.selectedCategory);
        
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
        updatePortfolioView($scope.selectedCategory);
    };
    
    function updatePortfolioView(category) {
        
        // failed service attempt. preserving because it SHOULD be fixed at some point
        /*$scope.cards = getGalleries.cards;
        alert("value of cards: " + $scope.cards);*/
        //$scope.cards = fakeCards.cards;
    
        // preferably, this data should come from a service component utilized by this method, 
        // not directlypresent in the controller
        
        $http.get("./scripts/php/portfolioQuery.php?tag=" + category)
        .then(function (response) 
          {
            //$scope.cards = response.data.records;
            $scope.cards = response.data.records;
          });
    };
    
}]);