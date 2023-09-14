<!-- capture the $_POST data sent from my form -->
<!-- connect and INSERT that data into the DB -->
<!-- redirect back to the index.php page  -->
<?php
    // header('Location: index.php');

try{
    $db = new PDO('mysql:host=localhost;dbname=wcoding;charset=utf8', 'root', '');

} catch(Exception $e) {
    die("Error: $e->getMessage()");
}

if(!empty($_GET['pseudo']) && !empty($_GET['message'])){

    setcookie('pseudo', $_GET['pseudo'], time() + 365*24*3600);

    $pseudo = $_GET['pseudo'];
    $message = $_GET['message'];
    $message2 = htmlspecialchars($message);
    $pseudo2 = htmlspecialchars($pseudo);

    $req = $db ->prepare('INSERT INTO chatbox (pseudo, message, date_expiration) VALUES(:inPseudo, :inMessage, DATE_ADD(NOW(), INTERVAL 2 MONTH))');
    


    $req->execute(array(
    'inPseudo' => $pseudo2,     
    'inMessage' => $message2
));

} 

header('Location: index.php?posted=true');





