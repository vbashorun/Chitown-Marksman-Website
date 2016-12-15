app.controller('HomeController', ['$scope', function($scope) {
    
    $(document).ready(function() {
        
        //startSlideshow();

    });
    
    function startSlideshow() {
        slideShow = [
            '../app/images/marksman-slide-2.jpg',
            '../app/images/marksman-slide-3.jpg',
            '../app/images/marksman-slide-4.jpg',
            '../app/images/marksman-slide-5.jpg',
            '../app/images/marksman-bridge-2.jpg'
        ];
        
        $('#homeBackground').ready(function() {
            
            var index = 0;

            /*setInterval(function() {
                $('#homeBackground').css({"background-image":"url(" + slideShow[index] + ")"});
                index = index == 5 ? 0 : index++;
                //index++;
                alert(index);
            }, 3000);*/
            
            //background-image: url('../images/marksman-bridge-2.JPG');
        });
    }
    
}]);