<?php

$dbHost = 'localhost';
$dbUser = 'root';
$dbPassword = 'password';
$dbName = 'chitown_marksman';
$port = 8080;

$galleryId = trim($_GET["id"]);

//sql statements
$sqlSelect = "SELECT name, cover, description, location, images FROM galleries WHERE id = '$galleryId'";

//connect to database and verify connection
$con = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
if (!$con)
    die('error on php server: ' . mysqli_error($con));

//select the database
mysql_select_db ($dbName);

//query the database for user info
$result = mysqli_query($con, $sqlSelect);

$outp = "";

//break result set into array
while($row = mysqli_fetch_array($result)) 
{    
    $outp .= '{"name":"'  . $row["name"]     . '",';
    $outp .= '"description":"'   . $row["description"]   . '",';
    $outp .= '"cover":"'   . $row["cover"]   . '",';
    $outp .= '"location":"'   . $row["location"]   . '",';
    $outp .= '"images":"'. $row["images"]            . '"}';
}

$outp ='{"records":['.$outp.']}';

$con->close();

echo($outp);

?>