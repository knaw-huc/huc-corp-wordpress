<?php
$templatePage = 'page.html';

include('_inc-build-1-single-page.php');
// Handle items  item file | post type | number of items | variable name | Search word
$lists = array
  (
    array('item-update.html','update','3','DESC', 'allUpdatesItems', $postCustomMetaToolName)
  );
include('_inc-build-3-template-array.php');


include('_inc-build-4-total-page.php');
?>
