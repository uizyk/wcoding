<?php

$sql = 'SELECT id, topic, title, content, author, date_creation FROM articles';


try{
    $db = new PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', '');
} catch(Exception $e){
    die('Error : '.$e->getMessage());
}

$response = $db->query($sql);



while($data = $response->fetch(PDO::FETCH_ASSOC)){

    $random_num = rand(1,70);
    $image = "https://source.unsplash.com/600x400/?{$data['topic']}";
    $image2 = "https://i.pravatar.cc/40?img={$random_num}";

    echo
    "<div class='article'>
    <img src='{$image}' class='image1'/><br>
    <span class='topic'><strong>{$data['topic']}</strong></span><br>
    <span class='title'><strong>{$data['title']}</strong></span><br>
    <span class='content'>{$data['content']}</span> <br><br><br><br><br><br>
    <img src='{$image2}' class='image2'/>
    <span class='author'>{$data['author']}</span>
    <span> <a href='comments.php?article={$data['id']}'>Comments</a></span> <br>
    <span>{$data['date_creation']};</span>
    </div>";

} ?>