app.directive('imageonload', function() {
    console.log("directive initialized");
    
    var masonryParams = {
        itemSelector: '.image-card',
        columnWidth: '.gallery-grid-sizer',
        percentPosition: true,
        gutter: 0
    };
    
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                console.log('image is loaded');
                
                setTimeout(function() {
                    $('.grid').masonry(masonryParams);
                    console.log('masonry called');
                }, 1000);
            });
            element.bind('error', function(){
                console.log('image could not be loaded');
            });
        }
    };
});