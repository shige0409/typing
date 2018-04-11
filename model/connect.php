<?php
$hostname = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'typing';
$db = mysqli_connect($hostname, $username, $password, $dbname);
if(!$db) {
  echo 'db error';
}
else {
  echo 'success connect'.'<br>';
}
mysqli_set_charset($db, 'utf8');
?>