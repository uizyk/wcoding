<?php

$page = $_POST['article_id'];
$page2 = (int)htmlspecialchars($page);
// echo $page, "<br>";
// echo $page2, "<br>";

// echo "<pre>";
// print_r($_POST);
// echo "</pre>";

try{
    $db = new PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', '');

} catch(Exception $e) {
    die("Error: $e->getMessage()");
}

if(!empty($_POST['username']) && !empty($_POST['comment'])){

    $username = $_POST['username'];
    $comment = $_POST['comment'];
    $username2 = htmlspecialchars($username);
    $comment2 = htmlspecialchars($comment);

    $req = $db ->prepare("INSERT INTO comments (username, comment, article_id) VALUES(:inUsername, :inComment, :inArticleId)");
    


    $req->execute(array(
    'inUsername' => $username2,     
    'inComment' => $comment2,
    'inArticleId' => $page2
));

} 

header("Location: comments.php?article=$page2");