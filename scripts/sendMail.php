<?php

$email = "chitownmarksman@gmail.com";
$visitorEmail = $_POST['visitorEmail'];
$emailSubject = $_POST['emailSubject'];
$emailMessage = $_POST['emailMessage'];

$headers = "From: ".$visitorEmail;

mail($email, $emailSubject, $emailMessage, $headers);
?>