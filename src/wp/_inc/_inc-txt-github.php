<?php
include('parsedown.php');               //  convert markdown
$Parsedown = new Parsedown();

function getGithubTxt($productName, $contentType) {



  $outputTxt = file_get_contents('https://raw.githubusercontent.com/huc-com/huc-communication/master/'.$productName.'/'.$productName.$contentType);

  //$output = str_replace('](images/','](https://raw.githubusercontent.com/huc-com/huc-communication/master/'.$productName.'/images/', $output);


  return $outputTxt;
}
?>
