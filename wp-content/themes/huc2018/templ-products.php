<?php /* Template Name: Products */ ?>
<?php

// Handle basic page
$templatePage = 'templ-products.html';
include('_inc-build-1-single-page.php');


// Handle items  item file | post type | number of items | variable name
$lists = array
  (

    array('item-card.html','products','10','DESC', 'allProductItems')


  );
include('_inc-build-3-template-array.php');


// Build the page
include('_inc-build-4-total-page.php');

?>
