app.controller('ContactController', ['$scope', '$http', function($scope, $http) {
    
    $(document).ready(function() {
        
        $scope.visitorEmail = "";
        $scope.emailSubject = "";
        $scope.emailMessage = "";
        
    });
    
    $scope.openMessageForm = function() {
        $("#messageForm").css({"display" : "block"});
    };
    
    $scope.closeMessageForm = function() {
        $("#messageForm").css({"display" : "none"});
    };
    
    $scope.validateEmail = function() {
        
        var missingEmail = ($scope.visitorEmail == ""), 
            missingSubject = ($scope.emailSubject == ""), 
            missingMessage = ($scope.emailMessage == "");

        if (missingEmail)
        {
            alert("Sort of need to know who I'd be responding to. Your email, please?");
            return false;
        }
        else if (missingSubject)
        {
            alert("Afraid I need an email subject, bud.");
            return false;
        }
        else if (missingMessage)
        {
            alert("Um....kinda need a message....");
            return false;
        }
        else 
            sendEmail($scope.visitorEmail, $scope.emailSubject, $scope.emailMessage);
    };

    function sendEmail(visitorEmail, emailSubject, emailMessage) {
        
        var xmlhttp;

        if (window.XMLHttpRequest)
        {
          // code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
        }
        else
        {
            // code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange=function()
        {

            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                // code to execute when response is received
                var response = xmlhttp.responseText;

                if (response == "Message Sent") {
                    
                    $scope.visitorEmail = "";
                    $scope.emailSubject = "";
                    $scope.emailMessage = "";
                    
                    $("#emailConfirmation").css({"opacity" : "1"});
                    
                    setTimeout(function() {
                        $("#emailConfirmation").css({"opacity" : "0"});
                    }, 1500);
                    
                    $scope.$apply(); // without this, scope variables change but aren't reflected in UI
                }
            }
        }

        //set up request and use unique id to avoid cached result
        xmlhttp.open("POST","./scripts/php/sendMailChitown.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        var mailParams = "visitorEmail=" + visitorEmail + "&emailSubject=" + emailSubject + "&emailMessage=" + emailMessage;
        xmlhttp.send(mailParams);
    };
    
}]);

