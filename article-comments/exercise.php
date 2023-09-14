<?php

//q1
// $sql = 'SELECT pseudo
// , message
// , YEAR(created_at) AS year
// , MONTH(created_at) AS month
// , DAY(created_at) AS day
// , HOUR(created_at) AS hour
// , MINUTE(created_at) AS minute
// , SECOND(created_at) AS second 
// FROM chatbox';

// $sql = 'SELECT pseudo, message, DATE_FORMAT(created_at, "%Y/%m/%d") AS date FROM chatbox';


//q2
// $sql = 'SELECT pseudo, message, DATE_ADD(created_at, INTERVAL 1 HOUR) AS "message+hour" FROM chatbox';


//q3

// $slq = "SELECT pseudo, message, created_at FROM chatbox WHERE created_at BETWEEN '2022-08-30 00:00:00' AND '2022-9-01 00:00:00'"


//q4
// $sql = 'INSERT INTO chatbox(pseudo, message, created_at, date_expiration) VALUES("q4", "Hello everyone q4", "2022-8-30 5:45:12", DATE_ADD(NOW(), INTERVAL 2 MONTH))';


//q5 //q6
// $sql = "SELECT pseudo, message, created_at FROM chatbox WHERE created_at = '2022-08-30 05:45:12'";


//q7

// for($i=0; $i<=20; $i++){
// $sql = 'SELECT pseudo
// , message
// , DAY(created_at) AS day
// , MONTH(created_at) AS month
// , YEAR(created_at) AS year
// FROM chatbox ';
// }

//q8 

// $sql = 'SELECT pseudo, message, DATE_FORMAT(created_at, "%d/%m/%Y") AS date FROM chatbox';

//q9

// $sql = 'INSERT INTO chatbox(pseudo, message, created_at, date_expiration) VALUES("q4", "Hello everyone q4", "2022-8-30 5:45:12", DATE_ADD(NOW(), INTERVAL 2 MONTH))';

// $expire = DATE_ADD('created_at', 'INTERVAL 2 MONTH');
// $sql = 'UPDATE chatbox SET date_expiration = DATE_ADD(created_at, INTERVAL 2 MONTH)';


//DB connection
try{
    $db = new PDO('mysql:host=localhost;dbname=wcoding;charset=utf8', 'root', '');
} catch(Exception $e){
    die('Error : '.$e->getMessage());
}

$response = $db->query($sql);

while($data = $response->fetch(PDO::FETCH_ASSOC)){
    echo"<span><strong>Name:</strong> ";
    echo $data['pseudo'];
    echo"</span> <br>";
    echo"<span><strong>Message:</strong> ";
    echo $data['message'];
    echo"</span> <br>";
    echo "<span>";
    echo $data['date'];
    echo "</span> <br>";
    
    echo "------------------------ <br><br><br>";
}

