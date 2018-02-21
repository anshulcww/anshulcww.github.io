<?php
    include('db_connect.php');   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $arr = array();
    $date = $_GET['date']; 
    $query = "SELECT * FROM x_event WHERE";
    if($_GET['c'] != ""){
        $c = "%".$_GET['c']."%"; 
        $query.=" x_creator LIKE '$c' AND";
    }  
    if($_GET['d'] != ""){
        $d = $_GET['d']; 
        $query.=" x_device_id = '$d' AND";
    }
    if($_GET['e'] != ""){
        $e = "%".$_GET['e']."%"; 
        $query.=" x_event_desc LIKE '$e' AND";
    }
    if($_GET['m'] != ""){
        $m = $_GET['m']; 
        $query.=" x_model_id = '$m' AND";
    }  
    if($_GET['n'] != ""){
        $n = $_GET['n']; 
        $query.=" x_nrf_id = '$n' AND";
    }
    if($_GET['o'] != ""){
        $o = $_GET['o']; 
        $query.=" x_order_id = '$o' AND";
    }
    $query.=" x_timestamp > '$date'";
    $result = $conn->query($query);  
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $arr[] = $row;
        }
    }
    $message = array(
        "query" => $query,
        "result" => $arr,
        "input" => $_GET);
    echo json_encode($message);
    $conn->close();
?>