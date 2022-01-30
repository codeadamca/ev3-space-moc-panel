<?php

include( '../codeadam.ca/includes/functions.php' );

if(isset($_GET['name']) and isset($_GET['value']))
{

  $query = 'UPDATE sb_settings SET 
    value = "'.$_GET['value'].'"
    WHERE name = "'.$_GET['name'].'"
    LIMIT 1';
  mysqli_query($connect, $query);
  
  echo '{"status":"complete","'.$_GET['name'].'":"'.$_GET['value'].'"}';
  
}
else
{
  
  echo '{"status":"error"}';
  
}