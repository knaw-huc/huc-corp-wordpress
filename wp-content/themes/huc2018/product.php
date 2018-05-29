<?php /* Template Name: product page */ ?>
<?php
$templatePage = 'product.html';
$templatePostSnip = 'components/content-updates-list--item.html';
$postType = 'post';
$postAmount = '10';
$loopOrder = 'DESC';

include('_inc-loop-one-page-single.php');
$loopTag = $postCustomVal01;
$productName = strtolower($postTitle);


include('parsedown.php');
$Parsedown = new Parsedown();

function placeMd($mdFile, $productName){
  $mdText = '123';
  $mdText = file_get_contents('https://raw.githubusercontent.com/huc-com/huc-communication/master/'.$productName.'/'.$productName.$mdFile);
  //](images/
  $mdText = str_replace('](images/','](https://raw.githubusercontent.com/huc-com/huc-communication/master/'.$productName.'/images/', $mdText);
  return $mdText;
}

$productAbout = $Parsedown->text(placeMd('-about.md', $productName));
$productFeatures = $Parsedown->text(placeMd('-features.md', $productName));
$productTechnology = $Parsedown->text(placeMd('-technology.md', $productName));
$productRoadmap = $Parsedown->text(placeMd('-roadmap.md', $productName));


include('_inc-loop-to-list.php');
include('_inc-implementations.php');
include('_inc-teams.php');

include('_inc-build-page.php');


?>
