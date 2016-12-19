app.controller('PortfolioController', ['$scope', function($scope) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    //var masonryData = $('.grid').data('masonry'); //used for testing presence of masonry
    var masonryParams = {
        itemSelector: '.gallery-card',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    
    $scope.selectedCategory = "featured";
    
    $(document).ready(function() {
        //alert("portfolio controller initialized");
        
        /*$(window).load(function() {
            alert("window loaded");
            
            var browserWindow = $(this);
            
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
        });*/
    });
    
    $(window).load(function() {
        alert("window ready");
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
        //alert("current category: " + $scope.selectedCategory);
        updatePortfolioView($scope.selectedCategory);
    };
    
    function updatePortfolioView(category) {
        
    };
    
}]);