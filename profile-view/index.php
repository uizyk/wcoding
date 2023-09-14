<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profiles</title>
    <style>
        img {
        height: 200px;
        width: 400px;
        margin-bottom: 30px;
        border-radius: 50%;
        }
        #profiles{
            display:flex;
            justify-content: space-evenly;
            align-items: center;
        }

        #content{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            margin-top: 30px;
            overflow: hidden;
            transition: all 0.4s ease-in-out;
            height: 800px;
        }

        .button{
            text-decoration: none;
            color: black;
            font-size: 2.4em;
            transition: 1s;
        }

        .button:hover{
            transform: scale(1.5) rotate(30deg)
            text-decoration: underline;
        }

        .button:nth-child(1):hover{
            text-shadow: 1.5px 1.5px red;

        }
        .button:nth-child(2):hover{
            text-shadow: 1.5px 1.5px blue;
        }
        .button:nth-child(3):hover{
            text-shadow: 1.5px 1.5px yellow;
        }

        #content.hide{
            height: 0;
        }
    </style>

</head>
<body>
    <div id="profiles">

        <div class="button" id="1" onclick="slide()">View Amy's Profile</div>
        <div class="button" id="2" onclick="slide()">View Tom's Profile</div>
        <div class="button" id="3" onclick="slide()">View Mark's Profile</div>
    </div>
    <div id="content">
        
    </div>
    <script>
        let profiles = document.querySelector('#profiles');
        let body = document.querySelector('body');
        let id;
        let divs = document.querySelectorAll(".button");



            for (let i=0; i<divs.length; i++){

                divs[i].addEventListener('click', function(e){
                    let id = e.currentTarget.id;
                    let xhr = new XMLHttpRequest();
                    xhr.open("GET", "loadProfile.php?id=" + id);
                    xhr.addEventListener('readystatechange', function(){
                        if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
                            console.log(xhr.responseText);
                            let content = document.querySelector('#content');
                            content.innerHTML = xhr.responseText;
                        }
                    });
                    xhr.send(null);
                })
            }

            function slide(){
            let content = document.querySelector('#content');
            content.classList.toggle('hide');
        }

    </script>
</body>
</html>