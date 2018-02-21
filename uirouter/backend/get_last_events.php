<?php
    include('db_connect.php');   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $query = "SELECT * FROM x_event ORDER BY x_timestamp DESC";  
    $result = $conn->query($query);  
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $arr[] = $row;
        }
    }
    echo json_encode($arr);
    $conn->close();
?>