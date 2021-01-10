<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$executionStartTime = microtime(true);

include("config.php");

header('Content-Type: application/json; charset=UTF-8');

$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

if (mysqli_connect_errno()) {
    
    $output['status']['code'] = "300";
    $output['status']['name'] = "failure";
    $output['status']['description'] = "database unavailable";
    $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
    $output['data'] = [];

    mysqli_close($conn);

    echo json_encode($output);

    exit;

}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$jobTitle = $_POST['position'];
$email = $_POST['email'];
$department = $_POST['department'];
$title = $_POST['title'];
$dob = $_POST['dob'];
$address1 = $_POST['address1'];
$address2 = $_POST['address2'];
$postCode = $_POST['postCode'];
$city = $_POST['city'];
$phone = $_POST['phone'];
$salary = $_POST['salary'];
$startDate = $_POST['startDate'];
$endDate = $_POST['endDate'];
$workHistory = $_POST['workHistory'];
$imgUrl = '';

$query = "INSERT INTO personnel (
			firstName, 
			lastName, 
			jobTitle, 
			email, 
			departmentID, 
			title, 
			dob, 
			address_1, 
			address_2, 
			post_code, 
			city, 
			phone,  
			salary, 
			hire_date, 
			end_date,  
			work_history,	
			imgUrl 
	) VALUES (
		'$firstName', 
		'$lastName', 
		'$jobTitle', 
		'$email', 
		(SELECT d.id FROM department d LEFT JOIN location l ON l.id = d.locationID WHERE d.id = '$department'),
		'$title',
		'$dob', 
		'$address1', 
		'$address2', 
		'$postCode', 
		'$city', 
		'$phone',  
		'$salary', 
		'$startDate', 
		'$endDate', 
		'$workHistory',
		'$imgUrl'
		)";

$result = $conn->query($query);
	
	if (!$result) {
		
		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = mysqli_error($conn);	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";

	echo json_encode($output);

?>