app.directive('imageonload', function() {
    
    var masonryParams = {
        itemSelector: '.image-card',
        columnWidth: '.gallery-grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    var browserWindow = $(window);
    
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                
                setTimeout(function() {
                    
                    if (browserWindow.width() >= tabletWidth)
                        $('.grid').masonry(masonryParams);
                    
                }, 1000);
            });
            element.bind('error', function(){
                console.log('image could not be loaded');
            });
        }
    };
});