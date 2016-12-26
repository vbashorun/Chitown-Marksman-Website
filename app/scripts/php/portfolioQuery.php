<?php

$dbHost = 'localhost';
$dbUser = 'root';
$dbPassword = 'password';
$dbName = 'chitown_marksman';
$port = 8080;

$tagName = trim($_GET["tag"]);

//sql statements
$sqlSelect = "SELECT name, cover, location, id FROM galleries WHERE tags LIKE '%$tagName%' ORDER BY ID";

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
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"name":"'  . $row["name"]     . '",';
    $outp .= '"cover":"'   . $row["cover"]   . '",';
    $outp .= '"location":"'   . $row["location"]   . '",';
    $outp .= '"id":"'. $row["id"]            . '"}';
}

$outp ='{"records":['.$outp.']}';
$con->close();

echo($outp);

?>