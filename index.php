<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <title>My Movies</title>
</head>
<body>
    <div class ="movies">

        <?php 
        $movies = json_decode(file_get_contents('./movies.json'));

        // echo $movies->movies[0]->title;

        foreach($movies->movies as $movie) {
            // print_r($movie);
            include 'card.php';
        }
        

        ?>
    </div>
</body>
</html>

