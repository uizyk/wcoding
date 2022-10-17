<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autocomplete</title>
    <script src="script.js" defer></script>
    <style>
        .selected, #results>div:hover{
            background-color: gray;
        }
    </style>
</head>
<body>
    <input type="text" autocomplete="off">
    <div id="results"></div>
</body>
</html>
