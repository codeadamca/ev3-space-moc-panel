<?php

include( '../codeadam.ca/includes/functions.php' );

$query = 'SELECT * 
  FROM sb_settings
  ORDER BY id';
$result = mysqli_query($connect, $query);

$data = array();

while($record = mysqli_fetch_assoc($result))
{
  $data[$record['name']] = $record['value'];
}

echo json_encode($data);
