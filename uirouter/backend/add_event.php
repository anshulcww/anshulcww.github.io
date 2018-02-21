<?php
    include('db_connect.php');
    include('random.php');
   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $arr = array();
    $eId = "E".generateRand();
    $e = $_GET['e'];
    $d = $_GET['d'];
    $m = $_GET['m'];
    $o = $_GET['o'];
    $n = $_GET['n'];
    $u = $_GET['u'];

    $stmt = $conn->prepare("INSERT INTO x_event ( 
                            x_event_id, 
                            x_event_desc, 
                            x_device_id, 
                            x_model_id, 
                            x_order_id,
                            x_nrf_id,
                            x_creator )
                            VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $eId, $e, $d, $m, $o, $n, $u);
    $result = $stmt->execute();
    $arr["result"] = $result;
    $arr["eventId"] = $eId;
    $arr["device"] = $d;
    echo json_encode($arr);
    $conn->close();
?>