<?php 
$file = file_get_contents("./users.json");
$users = json_decode($file);
$user_id = $_GET['id'];

foreach($users->users as $user) {
  if ($user->id == $user_id) {
    $selectedUser = $user;
  }
}

require('profile.php');