<!-- FORM with 2 inputs and a send button -->
<!-- DB connection and query to get the message data -->
<!-- Include the messageView.php  -->

<?php
session_start();
if (!isset($_GET['posted'])) {
    $_SESSION['showMoreCount'] = 0;
    $_SESSION['displayNum'] = 10;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <title>Document</title>
    <style>
        body{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        input:nth-child(1){
            width: 400px;
            height: 40px;
            border-radius: 40px;
            margin-bottom: 20px;

        }
        input:nth-child(2){
            width: 800px;
            height: 40px;
            margin-bottom: 20px;
            border-radius: 40px;

        }

        input:nth-child(3), .refresh-showmore input:nth-child(1), .refresh-showmore input:nth-child(2){
            width: 200px;
            height: 60px;
            border-radius: 15px 15px 15px 0px;
            color: purple;
            background-color: rgba(252,90,141);
            font-size: 1.5em;
        }

        .number-options{
            display: flex;
            gap: 20px;
            
        }
        label input:nth-child(1), label input:nth-child(2), label input:nth-child(3){
            height: 20px;
            width: 20px;
        }
        
        .h3one{
            background-color: rgba(135, 206, 235, 0.8);
            border-radius: 5px 5px 5px 0;
            min-width: 100px;
            max-width: 500px;
            min-height: 40px;
            max-height: 500px;
            color: white;
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 5px;
            font-weight: 400;
            align-self: flex-start;
            overflow-wrap: break-word;
        }

        .h3two{
            background-color: rgba(135, 80, 235, 0.8);
            border-radius: 5px 5px 0 5px;
            min-width: 100px;
            max-width: 500px;
            min-height: 40px;
            max-height: 500px;
            color: white;
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 5px;
            font-weight: 400;
            align-self: flex-end;
            overflow-wrap: break-word;
            
            
        }
        .p1{
            margin-top: -10px;
            color: rgba(0,0,0,0.5);
            align-self: flex-start;
            margin-left: 35px;
        }

        .p2{
            margin-top: -10px;
            color: rgba(0,0,0,0.5);
            align-self: flex-end;
            margin-right: 35px;
        }

        .container{
            width: 800px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .ninja-message{
            display: flex;
            align-self: flex-start;
        }

        .ninja-message2{
            display: flex;
            align-self: flex-end;
        }

        .ninja{
            height: 30px;
            width: 30px;
            align-self: flex-start;
            margin-top: 30px;
            margin-right: 6px;
        }

        .ninja2{
            height: 40px;
            width: 40px;
            align-self: flex-end;
            margin-bottom: 25px;
            margin-left: 6px;
        }

        
    </style>
</head>
<body>
    <form action="postMsg.php" method="GET">
        <input type="text" name="pseudo" placeholder ="Enter your name" value="<?= isset($_COOKIE['pseudo']) ? $_COOKIE['pseudo'] : "" ;?>"/    >
        <input type="text" name="message" placeholder="Type your message"/>
        <input type="submit" value="Send"/>

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
</body>
</html>

<?php 

include("loadMsg.php");

?>

