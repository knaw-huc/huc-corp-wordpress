<?php
$templatePage = 'single-products.html';

include('_inc-build-1-single-page.php');
// Handle items  item file | post type | number of items | variable name | Search word
$lists = array
  (
    array('item-update.html','post','3','DESC', 'allPostItems', $postCustomMetaGithubName)
  );
include('_inc-build-3-template-array.php');


include('_inc-build-4-total-page.php');
?>
