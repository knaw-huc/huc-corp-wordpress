<?php /* Template Name: Research */ ?>
<?php

// Handle basic page
$templatePage = 'templ-research.html';
include('_inc-build-1-single-page.php');

// Handle items  item file | post type | number of items | variable name | parent id 12404 //186
$lists = array
  (
    array('item-card.html','page','100','DESC', 'allResearchPages', '', 4),
  );
include('_inc-build-3-template-array.php');

// Build the page
include('_inc-build-4-total-page.php');

?>
