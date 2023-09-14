<?php

try{
    $db = new PDO('mysql:host=localhost;dbname=signin_signup;charset=utf8', 'root', '');

} catch(Exception $e) {
    die("Error: $e->getMessage()");
}


$login = addslashes(htmlspecialchars(htmlentities(trim($_POST['login']))));
$password = $_POST['password'];

// add a WHERE clause
$req = $db->prepare("SELECT password FROM members WHERE login = ?");
$req -> execute(array($login));
$password_hash = $req->fetch(PDO::FETCH_ASSOC);

    
if(isset($password_hash['password'])){
    $password_verify = password_verify($password, $password_hash['password']);
    if(!empty($_POST['login']) && !empty($password)
    && $password_verify){
        session_start();
        $_SESSION['login'] = $login;
        header('Location: connected.php');
        // include('chatbox.php');
    } 

} else{
    header('Location: index.php?signin=fail');
    echo "wrong credentials";
}
?>