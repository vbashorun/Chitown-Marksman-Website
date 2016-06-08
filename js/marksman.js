
$(document).ready(function() {
    
    $(window).load(function() {
        
        setTimeout(function() {
            $("#loadBackdrop").css({"opacity":"0", "height":"0" });
        }, 1000);
       
    });
    
    $('#chevron').click(function() 
     {
        var targetOffset = $("#section2").offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 1000);
        return false;
      });
    
    $('#instagramButton, #instagramButton img').hover(function() 
    {
        $("#instagramButton img").css({"content" : 'url("images/icon_instagram_yellow.png")'});

    }).mouseout(function() 
    { 
        $("#instagramButton img").css({"content" : 'url("images/icon_instagram_blue.png")'});
    });
    
    $('#contactMeButton, #contactMeButton img').click(function()
      {
        var targetOffset = $("#section3").offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 1000);
        return false;
      }).hover(function() 
        {
            $("#contactMeButton img").css({"content" : 'url("images/icon_mail_yellow.png")'});

        }).mouseout(function() 
        { 
            $("#contactMeButton img").css({"content" : 'url("images/icon_mail_blue.png")'});
        });
    
});

function validateEmail() {
    
    var visitorEmail = document.getElementById("visitorEmail"),
        emailSubject = document.getElementById("emailSubject"),
        emailMessage = document.getElementById("emailMessage");
    
    //alert("value of sender: " + visitorEmail.value + "\n value of subject: " + emailSubject.value + "\n value of message: " + emailMessage.value);
    
    var missingEmail = (visitorEmail.value == ""), 
        missingSubject = (emailSubject.value == ""), 
        missingMessage = (emailMessage.value == "");
    
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
        sendEmail(visitorEmail, emailSubject, emailMessage);
        
}

function sendEmail(visitorEmail, emailSubject, emailMessage)
{
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
                $("#section3Content [type*=text], #sendMailButton").css({"display" : "none"});
                $("#emailConfirmation").css({"display" : "block"});
            }
        }
    }

    //set up request and use unique id to avoid cached result
    xmlhttp.open("POST","scripts/sendChitown.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    var mailParams = "visitorEmail=" + visitorEmail.value + "&emailSubject=" + emailSubject.value + "&emailMessage=" + emailMessage.value
    xmlhttp.send(mailParams);
}