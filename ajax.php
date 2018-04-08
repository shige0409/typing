<?php
$lang = $_GET['lang'];
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
$query = mysqli_query($db, "SELECT * FROM $lang");
while($row = mysqli_fetch_array($query)) {
  echo $row['script'];
  echo $row['intro'];
}
 ?>
