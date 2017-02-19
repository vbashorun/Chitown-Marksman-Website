app.controller('PortfolioController', ['$scope', '$http', function($scope, $http) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    var browserWindow = $(window);
    
    $(document).ready(function() {
        
        $scope.masonryParams = {
            itemSelector: '.gallery-card',
            columnWidth: '.portfolio-grid-sizer',
            percentPosition: true,
            gutter: 0
        };
        $scope.cards = [];
        
        // adjust masonryJS on resize
        browserWindow.resize(function() {
            if (browserWindow.width() < tabletWidth)
                $('.grid').masonry('destroy');
            else
                $('.grid').masonry($scope.masonryParams);
        });
        
        $scope.selectedCategory = "featured";
        updatePortfolioView($scope.selectedCategory);
    });
    
    $scope.handleCategory = function(eventObject) {
        
        var element = eventObject.target;
        var isSelected = $(element).hasClass("categorySelected");
        
        if (!isSelected) {
            $('#galleryContainer').css({"opacity" : "0"});
            $('#loaderContainer').css({"opacity" : "1"});
            $('.categorySelected').removeClass("categorySelected");
            $(element).addClass("categorySelected");
            $scope.selectedCategory = element.getAttribute("data-category");
            
            setTimeout(function() {
                // placing update in timeout allows UI to update behind the scenes
                updatePortfolioView($scope.selectedCategory);
            }, 1000);
        }
    };
    
    $scope.handleCategoryMobile = function() {
        updatePortfolioView($scope.selectedCategory);
    };
    
    function updatePortfolioView(category) {
        
        // destroying masonry here allows new layout of galleries to be laid out properly by the imageOnLoad directive
        $('.grid').masonry('destroy'); 
        
        $http.get("./scripts/php/portfolioQuery.php?tag=" + category)
        .then(function (response) {
            $scope.cards = response.data.records;
            
            $('.grid').imagesLoaded( function() {
                setTimeout(function() {
                    $('#galleryContainer').css({"opacity" : "1"});
                    $('#loaderContainer').css({"opacity" : "0"});
                }, 2000);
            });
        })
        .catch(function(err){
            console.log("error loading portfolio galleries:...", err);
        });;
    };
}]);