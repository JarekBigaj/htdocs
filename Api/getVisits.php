<?php 

    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Origin: *");

    require_once "../config/dbconfig.php";

    $query = "SELECT * FROM visits";

    $result = mysqli_query($connection, $query) or die("Select Query Failed.");

    $count = mysqli_num_rows($result);

    if($count>0){
        $row = mysqli_fetch_all($result);

        echo json_encode($row);
    } else {
        echo json_encode(array("message"=> "No Product Found.", "status" => false));
    }
?>