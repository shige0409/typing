<?php
include 'model/connect.php';
$lang = $_GET['lang'];
$words = array();
$query = mysqli_query($db, "SELECT * FROM $lang");
while($row = mysqli_fetch_array($query)) {
  //echo $row['script'];
  //echo $row['intro'];
  $words[] = array($row['script'], $row['intro']);
}
return $words;
 ?>
