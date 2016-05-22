
$(document).ready(function() {
    
    $(window).load(function() {
        
        setTimeout(function() {
            $("#loadBackdrop").css({"opacity":"0", "height":"0" });
        }, 1000);
       
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
    
    if (missingEmail || missingSubject || missingMessage)
    {
        alert("your message is missing information");
        return false;
    }
    else
        sendEmail(visitorEmail, emailSubject, emailMessage);
        
}

function sendEmail(visitorEmail, emailSubject, emailMessage)
{
    alert("sendemail called");
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
            // document.getElementById("content").innerHTML=xmlhttp.responseText;
            alert("message sent");
            
        }
    }

    //set up request and use unique id to avoid cached result
    xmlhttp.open("POST","../scripts/sendMail.php?visitorEmail=" + visitorEmail + "&emailSubject=" + emailSubject + "&emailMessage=" + emailMessage,true);
    xmlhttp.send();
}