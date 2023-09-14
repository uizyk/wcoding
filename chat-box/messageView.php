<!-- USING the data I fetched from index -->

<div class="container">

<?php if($data['id'] % 2 == 0){
?>  <div class="ninja-message"/> 
        <img class = "ninja" src="data:image/png;base64,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"/>
        <h3 class="h3one"><?= $data['message'], "<br>";?></h3>
    </div>
    <p class="p1"><?= $data['pseudo']," ", $data['created_at'],"<br>";?></p>
    <?="<br>";?>

<?php
}else {
?>  <div class="ninja-message2"/>  
        <h3 class="h3two"><?= $data['message'], "<br>";?></h3>
        <img class = "ninja2" src="https://st4.depositphotos.com/18674256/21426/v/950/depositphotos_214266204-stock-illustration-ninja-icon-vector-isolated-on.jpg?forcejpeg=true"/>
    </div> 
    <p class="p2"><?= $data['pseudo']," ", $data['created_at'],"<br>";?></p>
    <?="<br>";?>
<?php
}?>

</div>



