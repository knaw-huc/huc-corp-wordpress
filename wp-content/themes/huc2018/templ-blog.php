<?php /* Template Name: blogs */ ?>
<?php

// Handle basic page
$templatePage = 'page-big-list.html';
include('_inc-build-1-single-page.php');

// Handle items  item file | post type | number of items | variable name | parent id 12404 //186
$lists = array
  (
    array('item-news-blog.html','post','100','DESC', 'allNewsItems', '')//4
  );
$loopTag = 'blog';
include('_inc-build-3-template-array.php');

// Build the page
include('_inc-build-4-total-page.php');

?>
