<?php /* Template Name: Research */ ?>
<?php

// Handle basic page
$templatePage = 'templ-research.html';
include('_inc-build-1-single-page.php');


// Handle items  item file | post type | number of items | variable name
$lists = array
  (

    array('item-card.html','projects','10','DESC', 'allProjectItems'),
    array('item-card.html','publications','10','DESC', 'allPublicationItems')


  );
include('_inc-build-3-template-array.php');


// Build the page
include('_inc-build-4-total-page.php');

?>
