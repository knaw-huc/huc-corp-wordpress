<?php /* Template Name: blog product overview page */ ?>
<?php

// Handle basic page
$templatePage = 'templ-blog-product-overview.html';
include('_inc-loop-one-page-single.php');


// Handle items  item file | post type | number of items | variable name
$lists = array
  (
  array('item-blog.html','post','10','DESC','allPostItems'),
  array('item-product.html','products','10','DESC', 'allProductItems'),
  array('item-blog.html','vacatures','10','DESC', 'allVacatureItems'),
  array('item-blog.html','projects','10','DESC', 'allProjectItems'),
  array('item-blog.html','publications','10','DESC', 'allPublicationItems'),
  array('item-blog.html','staff','10','DESC', 'allStaffItems')

  );
include('_inc-templ-array.php');


// Build the page
include('_inc-build-page.php');

?>
