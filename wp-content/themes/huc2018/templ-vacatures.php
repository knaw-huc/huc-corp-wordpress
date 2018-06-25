<?php /* Template Name: Vacatures */ ?>
<?php

// Handle basic page
$templatePage = 'templ-vacatures.html';
include('_inc-build-1-single-page.php');


// Handle items  item file | post type | number of items | variable name
$lists = array
  (

  array('item-blog.html','vacatures','10','DESC', 'allVacatureItems')


  );
include('_inc-build-3-template-array.php');


// Build the page
include('_inc-build-4-total-page.php');

?>
