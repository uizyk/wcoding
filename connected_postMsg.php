<!-- capture the $_POST data sent from my form -->
<!-- connect and INSERT that data into the DB -->
<!-- redirect back to the index.php page  -->
<?php
    // header('Location: index.php');
    session_start();

try{
    $db = new PDO('mysql:host=localhost;dbname=signin_signup;charset=utf8', 'root', '');

} catch(Exception $e) {
    die("Error: $e->getMessage()");
}

if(!empty($_GET['pseudo']) && !empty($_GET['message'])){

    setcookie('pseudo', $_GET['pseudo'], time() + 365*24*3600);

    $pseudo = $_SESSION['login'];
    $message = $_GET['message'];
    $message2 = htmlspecialchars($message);
    $pseudo2 = htmlspecialchars($pseudo);
    // $date_expiration = (date('d-m-y h:i:s') + 365*24*3600);

    $req = $db ->prepare('INSERT INTO connected_chatbox (pseudo, message, date_expiration) VALUES(:inPseudo, :inMessage, DATE_ADD(NOW(), INTERVAL 2 MONTH))');
    


    $req->execute(array(
    'inPseudo' => $pseudo2,     
    'inMessage' => $message2
));

} 

header('Location: connected.php?posted=true');
// include('connected.php');


