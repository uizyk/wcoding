<?php 
//if no current session, start one 
if(session_status() == 1){
    session_start();
}

try{
    $db = new PDO('mysql:host=localhost;dbname=wcoding;charset=utf8', 'root', '');

} catch(Exception $e) {
    die("Error: $e->getMessage()");
}

//changing the display amount 
if(isset($_GET['displayNum']) AND ($_GET['displayNum']==='10' OR $_GET['displayNum']==='20') /*if user pressed 10 or 20 */){
    $_SESSION['showMoreCount'] = 0;
    $_SESSION['displayNum'] = (int)$_GET['displayNum'];

}else if(isset($_GET['displayNum']) AND $_GET['displayNum']==='all'){
    $_SESSION['displayNum'] = 999;
    $_SESSION['showMoreCount'] = 0;
}


// handle the show more button 
if(isset($_GET['showMore']) AND $_GET['showMore']=== "true"){
    $_SESSION['showMoreCount'] = $_SESSION['showMoreCount'] + 1;
}

$limit = $_SESSION['displayNum'];
$offset = $_SESSION['showMoreCount'] * $_SESSION['displayNum'];

$response = $db->query("SELECT id, pseudo, message, created_at FROM chatbox ORDER BY id DESC LIMIT $offset, $limit");

while($data = $response->fetch(PDO::FETCH_ASSOC)){

    include('messageView.php');
}

?>