<?php /* Template Name: Homepage */ ?>
<?php

// Handle basic page
$templatePage = 'home.html';
include('_inc-build-1-single-page.php');


// Handle items  item file | post type | number of items | variable name
$lists = array
  (

    //array('item-homepage.html','homepage-items','10','ASC', 'allHomeItems')
    array('item-news-blog-home.html','post','4','DESC', 'allHomeItems', '')//4


  );
  $loopTag = 'news';
include('_inc-build-3-template-array.php');


// Build the page
include('_inc-build-4-total-page.php');

?>
