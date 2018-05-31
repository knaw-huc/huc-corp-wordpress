<?php /* Template Name: blog product overview page */ ?>
<?php


// Handle basic page
$templatePage = 'blog-product-overview.html';
include('_inc-loop-one-page-single.php');


// Handle items
$lists = array
  (
  array('blog-item.html','post','10','DESC','allPostItems'),
  array('product-item.html','test-products','10','DESC', 'allProductItems')
  );

for ($row = 0; $row < count($lists); $row++) {
    $templatePostSnip = $lists[$row][0];
    $postType = $lists[$row][1];
    $postAmount = $lists[$row][2];
    $loopOrder = $lists[$row][3];
    $varName = $lists[$row][4];
    include('_inc-loop-to-list.php');
}

// Build the page
include('_inc-build-page.php');


?>
