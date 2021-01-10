<?php 

ini_set('display_errors', 'On');
error_reporting(E_ALL); 

/* Getting file name */
$filename = $_FILES['file']['name']; 
$id_en = $_POST['id'];
$id = json_decode($id_en);

$imgUrl = './images/'.$filename;
/* Location */
$location = "../images/".$filename;

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

$query = "UPDATE personnel SET personnel.imgUrl='$imgUrl' WHERE personnel.id='$id'";

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
 
$uploadOk = 1;

if($uploadOk == 0){ 
   $output['file'] = 'Upload failed';
}else{ 
   /* Upload file */
   if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){ 
      $output['data'] = $location; 
   }else{ 
      $output['file'] = 'File transfer failed'; 
   } 
} 

   $output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = mysqli_error($conn);
   $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
   
	mysqli_close($conn);

	echo json_encode($output);

?> 