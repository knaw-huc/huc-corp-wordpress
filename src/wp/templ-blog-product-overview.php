<?php /* Template Name: blog product overview page */ ?>
<?php

// Handle basic page
$templatePage = 'templ-blog-product-overview.html';
include('_inc-loop-one-page-single.php');


// Handle items  item file | post type | number of items | variable name
$lists = array
  (
  array('item-blog.html','post','10','DESC','allPostItems'),
  array('item-product.html','test-products','10','DESC', 'allProductItems')
  );
include('_inc-templ-array.php');


// Build the page
include('_inc-build-page.php');

?>
