<?php


try{
    $db = new PDO('mysql:host=localhost;dbname=signin_signup;charset=utf8', 'root', '');

} catch(Exception $e) {
    die("Error: $e->getMessage()");
}

$req = $db->query('SELECT login FROM members');

$login = $req->fetch(PDO::FETCH_ASSOC);


if(!empty($_POST['login']) && !empty($_POST['email']) 
&& !empty($_POST['password']) && !empty($_POST['password_confirm'])
&& $_POST['password'] === $_POST['password_confirm']){

    $login = addslashes(htmlspecialchars(htmlentities(trim($_POST['login']))));
    $email = addslashes(htmlspecialchars(htmlentities(trim($_POST['email']))));
    $password =  $_POST['password'];
    $password_confirm = $_POST['password_confirm'];
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    if(preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $email)){

        $req = $db ->prepare('INSERT INTO members (login, email, password, is_active) VALUES(:inLogin, :inEmail, :inPassword, :isActive)');
    
    }


    $req->execute(array(
    'inLogin' => $login,     
    'inEmail' => $email,
    'inPassword' => $password_hash,
    'isActive' => true
));

} 