<?php
    include('db_connect.php');
    include('random.php');
   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $arr = array();
    $o = $_GET['o'];
    $n = $_GET['n'];
    $u = $_GET['u'];
    $i = 'O'.generateRand();
    $stmt = $conn->prepare("INSERT INTO x_order ( 
                            x_entry_id, 
                            x_order_no, 
                            x_notes, 
                            x_creator )
                            VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $i, $o, $n, $u);
    $result = $stmt->execute();
    $arr["result"] = $result;
    echo json_encode($arr);
    $conn->close();
?>