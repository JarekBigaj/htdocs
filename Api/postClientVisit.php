<?php

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization");

    $data = json_decode(file_get_contents("php://input"), true);
    
    // $id = $data["id"];
    $firstName = $data["firstName"];
    $lastName = $data["lastName"];
    $phoneNumber = $data["phoneNumber"];
    $email = $data["email"];
    $id_visit = $data["id_visit"];
    
    require_once "../config/dbconfig.php";

    $query = "INSERT INTO `clients` (`firstName`, `lastName`, `phoneNumber`, `email`, `id_visit`) VALUES ('".$firstName."','".$lastName."','".$phoneNumber."','".$email."','".$id_visit."')";

    
    if(mysqli_query($connection, $query) or die ("Insert query Failed.")){
        echo json_encode(array("message"=>"Visit is reserved successfully", "status" => true));
    } else {
        echo json_encode(array("message"=>"Failed Visit is not reserved", "status" => false));
    }
?>

