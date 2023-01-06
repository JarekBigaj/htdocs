<?php

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization");

    $data = json_decode(file_get_contents("php://input"), true);
    
    $date = $data["date"];
    $hour = $data["hour"];
    $id_dentist = $data["id_dentist"];
    
    require_once "../config/dbconfig.php";

    $query = "INSERT INTO `visits` (`date`, `hour`, `id_dentist`) VALUES ('".$date."','".$hour."','".$id_dentist."')";

    if(mysqli_query($connection, $query) or die ("Insert query Failed.")){
        echo json_encode(array("message"=>"Visit is reserved successfully", "status" => true));
    } else {
        echo json_encode(array("message"=>"Failed Visit is not reserved", "status" => false));
    }
?>