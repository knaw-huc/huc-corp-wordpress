<?php /* Template Name: news */ ?>
<?php

// Handle basic page
$templatePage = 'news-list.html';
include('_inc-build-1-single-page.php');

// Handle items  item file | post type | number of items | variable name | parent id 12404 //186
$lists = array
  (
    array('item-news-blog-home.html','post','100','DESC', 'allNewsItems', '')//4
  );
$loopTag = 'news';
include('_inc-build-3-template-array.php');

// Build the page
include('_inc-build-4-total-page.php');

?>
