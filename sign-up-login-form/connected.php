<?php 
if(session_status() == 1){
    session_start();
} 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css"/>
    <title>connected</title>
</head>
<body>

    <div class='connected_container'>
        <p>You are connected <?= isset($_SESSION['login']) ? $_SESSION['login'] : ""; ?>!</p>
        <form action="logout.php" method="GET">
            <input type="submit" name="signout" value="LOG OUT" class="signup_submit1"/>
        </form>
        <?php


if (!isset($_GET['posted'])) {
    $_SESSION['showMoreCount'] = 0;
    $_SESSION['displayNum'] = 10;
}
?>


<form action="connected_postMsg.php" method="GET">
    <input type="text" name="name" disabled value="<?= $_SESSION['login'];?>"/    >
    <input type="text" name="message" placeholder="Type your message"/>
    <input type="submit" value="Send"/>
    <input type="hidden" name="pseudo" value="<?= $_SESSION['login'];?>"/    >

    <div class="refresh-showmore">
        <input type="button" value="Refresh" name="refresh"/>
        <input type="button" value="Show More" name="showMore"/>
    </div>
    <div class="number-options">
        <label><input type="radio" tabindex="1" value="10" name="number-option" 
        <?= $_SESSION['displayNum'] === 10 ? "checked" : "" ?>>10</label>
            
            
        <label><input type="radio" tabindex="2" value="20" name="number-option"
        <?= $_SESSION['displayNum'] === 20 ? "checked" : "" ?>>20</label>
        <label><input type="radio" tabindex="3" value="all"name="number-option"
        <?= $_SESSION['displayNum'] === 999 ? "checked" : "" ?>>All</label>
    </div>
</form>


<?php 

include("loadMsg.php");

?>
</div>
    
    


</body>
</html>
