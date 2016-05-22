<?php

$email = "chitownmarksman@gmail.com";
$visitorEmail = $_POST['visitorEmail'];
$emailSubject = $_POST['emailSubject'];
$emailMessage = $_POST['emailMessage'];

$headers = "From: ". $visitorEmail . "\r\n";

$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail($email, $emailSubject, $emailMessage, $headers);
?>