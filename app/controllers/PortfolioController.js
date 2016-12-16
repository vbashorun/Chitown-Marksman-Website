app.controller('PortfolioController', ['$scope', function($scope) {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    //var masonryData = $('.grid').data('masonry'); //used for testing presence of masonry
    var masonryParams = {
        itemSelector: '.gallery-card',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    
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
        
        //alert("bypassed window load");
    });
    
    $(window).load(function() { 
        alert("window loaded outside of ready"); 
    });
}]);