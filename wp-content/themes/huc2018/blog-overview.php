<?php /* Template Name: blog overview page */ ?>
<?php
$templatePage = 'blog-overview.html';


// lists for items
$lists = array
  (
  array('blog-item.html','post','10','DESC','allPostItems')
  );

include('_inc-loop-one-page-single.php');



for ($row = 0; $row < 1; $row++) {
    $templatePostSnip = $lists[$row][0];
    $postType = $lists[$row][1];
    $postAmount = $lists[$row][2];
    $loopOrder = $lists[$row][3];
    $varName = $lists[$row][4];
    include('_inc-loop-to-list.php');
}


include('_inc-build-page.php');


?>
