app.controller('AboutController', ['$scope', function($scope) {
    
    var tabletWidth = 768;
    var laptopWidth = 992;
    var browserWindow = $(window);
    
    var iconMap = {
        
        icon_vsco: {
            white: "./images/social/icon_social_vsco_white.png",
            blue: "./images/social/icon_social_vsco_blue.png"
        },
        
        icon_instagram: {
            white: "./images/social/icon_social_instagram_white.png",
            blue: "./images/social/icon_social_instagram_blue.png"
        },
        
        icon_pinterest: {
            white: "./images/social/icon_social_pinterest_white.png",
            blue: "./images/social/icon_social_pinterest_blue.png"
        },
        
        icon_dribbble: {
            white: "./images/social/icon_social_dribbble_white.png",
            blue: "./images/social/icon_social_dribbble_blue.png"
        },
        
        icon_twitter: {
            white: "./images/social/icon_social_twitter_white.png",
            blue: "./images/social/icon_social_twitter_blue.png"
        },
        
        icon_facebook: {
            white: "./images/social/icon_social_facebook_white.png",
            blue: "./images/social/icon_social_facebook_blue.png"
        }
    }
    
    $(document).ready(function() {
        
        setIcons();
        setHoverResponses()

        // adjust masonryJS on resize
        browserWindow.resize(function() {
            setIcons();
            setHoverResponses()
        });
    });
    
    function setIcons() {
        
        if (browserWindow.width() >= tabletWidth) {
            // set the blue icons
            $(".social-media-icon").css("content", function(index, value){
                var returnString = 'url(' + iconMap[ $(this).attr("id") ]["blue"] + ')';
                return returnString;
            });
        }
        else {
            // set the white icons
            $(".social-media-icon").css("content", function(index, value){
                var returnString = 'url(' + iconMap[ $(this).attr("id") ]["white"] + ')';
                return returnString;
            });
        }
    }
    
    function setHoverResponses() {
        
        if( browserWindow.width() >= laptopWidth)
        {
            $("#socialMediaBlock div a").mouseenter(function() {
            
                var element = $(this);

                var imageSrc = element.children(".social-media-icon").attr("id");

                element.children(".social-media-icon").css({"content": "url(" + iconMap[imageSrc]["white"] + ")"});
            });

            $("#socialMediaBlock div a").mouseleave(function() {

                var element = $(this);

                var imageSrc = element.children(".social-media-icon").attr("id");

                element.children(".social-media-icon").css({"content": "url(" + iconMap[imageSrc]["blue"] + ")"});
            });
        }
        
        else {
            $("#socialMediaBlock div a").mouseenter(function() {});

            $("#socialMediaBlock div a").mouseleave(function() {});
        }
    }
}]);