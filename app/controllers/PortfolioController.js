app.controller('PortfolioController', ['$scope', '$http', function($scope, $http) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    // var masonryData = $('.grid').data('masonry'); //used for testing presence of masonry and accessing properties
    // console.log("masonry: " + masonryData);
    var masonryParams = {
        itemSelector: '.gallery-card',
        columnWidth: '.portfolio-grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    
    $(document).ready(function() {
        
        $scope.cards = [];
        $scope.selectedCategory = "featured";
        updatePortfolioView($scope.selectedCategory);
    });
    
    $scope.handleCategory = function(eventObject) {
        
        var element = eventObject.target;
        var isSelected = $(element).hasClass("categorySelected");
        
        if (!isSelected) {
            $('#galleryContainer').css({"opacity" : "0"});
            $('#loaderContainer').css({"opacity" : "1"});
            
            setTimeout(function() {
                $('.categorySelected').removeClass("categorySelected");
                $(element).addClass("categorySelected");
                $scope.selectedCategory = element.getAttribute("data-category");
                updatePortfolioView($scope.selectedCategory);
            }, 1000);
        }
    };
    
    $scope.handleCategoryMobile = function() {
        updatePortfolioView($scope.selectedCategory);
    };
    
    function updatePortfolioView(category) {
    
        // preferably, this data should come from a service component utilized by this method, 
        // not directlypresent in the controller
        
        $http.get("./scripts/php/portfolioQuery.php?tag=" + category)
        .then(function (response) {
            //$scope.cards = response.data.records;
            $scope.cards = response.data.records;
            
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
                    $('#galleryContainer').css({"opacity" : "1"});
                    $('#loaderContainer').css({"opacity" : "0"});
                }, 6000);
            });
        });
    };
}]);