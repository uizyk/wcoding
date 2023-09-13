
<?php 

$raw_text = file_get_contents("capitalCities.txt");

$text = unserialize($raw_text);

sort($text);

// print_r($text);    

$value = $_GET['value'];

$matches = array();
for($i = 0; $i < count($text); $i++){

    $found = stripos($text[$i], $value);
    
    if($found === 0 && count($matches)<10){

        $results = array_push($matches, $text[$i]);
        
    }
}
echo implode("|", $matches);

?>