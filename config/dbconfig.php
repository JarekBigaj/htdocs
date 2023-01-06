<?php

    // Dane konfiguracyjne dostępu do bazy danych
    $DB_HOST = "localhost";
    $DB_USER = "root";
    $DB_PASSWORD = "";
    $DB_NAME = "dentistrydatabase";

    // Łączenie z bazą danych
    $connection = mysqli_connect($DB_HOST,$DB_USER,$DB_PASSWORD,$DB_NAME);

    mysqli_set_charset($connection, "utf8mb4");

    // Wyrzucenie błędu jeśli nie połączy się z bazą danych
    if(!$connection){
        die("Connection failed: ".mysqli_connect_error());
    }
?>