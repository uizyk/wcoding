<?php

include('html.php');

try{
    $db = new PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', '');
} catch(Exception $e){
    die('Error : '.$e->getMessage());
}




$page = $_GET['article'];
$page2 = (int)htmlspecialchars($page);

// article sections once you click comments
$sql = "SELECT id, topic, title, content, author, date_creation FROM articles where id = $page2";






$response = $db->query($sql);

    echo "<div class='comments-container'>";

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
    </div>
    ";

} 


//comments section below the article


//pagination 
$offset = 0;

if (empty($_GET['page']) ) {  

    $page_number = 1;  

} else {  

    $page_number = $_GET['page'];  
    $offset = 3 * ($page_number-1) ;

} 

$sql2 = "SELECT id, username, date_creation, comment FROM comments WHERE article_id = $page2 ORDER BY id DESC LIMIT $offset, 3";
$sql3 = "SELECT COUNT(*) AS nb_article_id FROM comments WHERE article_id = $page2";


$response2 = $db->query($sql2);
$response3 = $db->query($sql3);

// setting page number relative to how many comments there are in the data base
$pagination = $response3->fetch(PDO::FETCH_ASSOC);
$nb = $pagination['nb_article_id'];
$total_pages = ceil($nb/3);



echo "
<div class='form-container'>
<h3>COMMENTS</h3>
<form action='postMsg.php' method='POST'>
<input type='text' name='username' placeholder = 'enter a username'/>
<input type='text' name='comment' placeholder='enter a comment'/>
<input type='hidden' name='article_id' value='$page2'/>
<input type='submit'/>
</form>
";

while($data = $response2->fetch(PDO::FETCH_ASSOC)){

    echo
    "
    <div class='comments'>
    <span><strong>{$data['username']}</strong></span>
    <span>{$data['date_creation']}</span><br>
    <span>{$data['comment']}</span>
    </div> </br> 
    ";
}

?>

<?="<div class='pagination'>
<p> Page:" ?>
<?php


for($page_number = 1; $page_number<= $total_pages; $page_number++) {  
    echo "<a href='comments.php?article=$page2&page=$page_number'>$page_number</a> "; 
    }  

echo "</p>";


//form container
echo '</div>';

//comments section container
echo '</div>';



?>