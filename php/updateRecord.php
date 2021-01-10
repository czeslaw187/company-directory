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

$id = $_POST['id'];
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

$query = "UPDATE personnel
          SET personnel.firstName = '$firstName',
              personnel.lastName = '$lastName',
              personnel.jobTitle = '$jobTitle',
              personnel.email = '$email',
              personnel.departmentID = '$department',
              personnel.title = '$title',
              personnel.dob = '$dob',
              personnel.address_1 = '$address1',
              personnel.address_2 = '$address2',
              personnel.post_code = '$postCode',
              personnel.city = '$city',                                               
              personnel.phone = '$phone',
              personnel.salary = '$salary',
              personnel.hire_date = '$startDate',
              personnel.end_date = '$endDate',              
              personnel.work_history = '$workHistory'        
          WHERE personnel.id = '$id'";
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
	$output['status']['description'] = mysqli_error($conn);
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];
	
	mysqli_close($conn);

	echo json_encode($output);

?>