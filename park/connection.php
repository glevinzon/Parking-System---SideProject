<?php

if(isset($_POST['txtdbName']) && isset($_POST['txtdbUser']) && isset($_POST['etdbPass']) && isset($_POST['etdbHost'])){
    $dbname = $_POST['txtdbName'];
	$dbuser = $_POST['txtdbUser'];
	$dbpass = $_POST['etdbPass'];
	$dbhost = $_POST['etdbHost'];
	
	$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	
	$test_query = "SHOW TABLES FROM $dbname";
	$result = mysqli_query($conn, $test_query);
	
	if($result->num_rows > 0){ //has record. correct username and password
        echo "success";
        exit;
    }
    else{
        echo "Wrong username and password"; 
        exit;
    }
	
}
else{
	$servername = "localhost"; //replace it with your database server name
	$username = "root";  //replace it with your database username
	$password = "";  //replace it with your database password
	$dbname = "db_park";
	
	//$servername = "mysql.hostinger.ph"; //replace it with your database server name
	//$username = "u704392893_side";  //replace it with your database username
	//$password = "mCb8fn8fCI";  //replace it with your database password
	//$dbname = "u704392893_park";
	
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
}
?>