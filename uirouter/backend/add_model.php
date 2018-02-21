<?php
    include('db_connect.php');
    include('random.php');
   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $arr = array();
    $m = $_GET['m'];
    $n = $_GET['n'];
    $u = $_GET['u'];
    $i = 'M'.generateRand();
    $stmt = $conn->prepare("INSERT INTO x_model ( 
                            x_entry_id, 
                            x_model_no, 
                            x_notes, 
                            x_creator )
                            VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $i, $m, $n, $u);
    $result = $stmt->execute();
    $arr["result"] = $result;
    echo json_encode($arr);
    $conn->close();
?>