<?php
    include('db_connect.php');  
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }    
    $u = $_GET['u'];
    $p = $_GET['p'];
    $md5 = md5($p);
    $arr = array();
    $query = "SELECT x_username, x_role 
              FROM x_user
              WHERE x_username = '$u'
              AND x_password = '$md5'";
    $result = $conn->query($query);  
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $arr[] = $row;
        }
    }
    $message = array("result"=>false);
    if(!empty($arr) && $arr[0]['x_username'] == $u){
        $message['result'] = true;  
        $message['user'] = $u;  
        $message['role'] = $arr[0]['x_role'];  
    }
    echo json_encode($message);
    $conn->close();
?>