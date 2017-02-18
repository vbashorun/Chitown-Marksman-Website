app.directive('imageonload', function() {
    
    var tabletWidth = 768;  // minimum width before masonryJS is instantiated
    var browserWindow = $(window);
    
    return {
        restrict: 'A',
        scope: {
            masonry: '='
        },
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                
                setTimeout(function() {
                    
                    if (browserWindow.width() >= tabletWidth)
                        $('.grid').masonry(scope.masonry);
                    
                }, 1000);
            });
            element.bind('error', function(){
                console.log('image could not be loaded');
            });
        }
    };
});