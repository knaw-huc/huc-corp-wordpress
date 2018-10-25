<?php /* Template Name: Research */ ?>
<?php

// Handle basic page
$templatePage = 'page-big-list-noSub.html';
include('_inc-build-1-single-page.php');

// Handle items  item file | post type | number of items | variable name | parent id 12404 //186
$lists = array
  (
    array('item-research.html','page','100','ASC', 'allResearchPages', '', 186),//4
  );
include('_inc-build-3-template-array.php');

// Build the page
include('_inc-build-4-total-page.php');

?>
