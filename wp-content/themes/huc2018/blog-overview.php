<?php /* Template Name: blog overview page */ ?>
<?php
$templatePage = 'blog-overview.html';
$templatePostSnip = 'blog-item.html';
$postType = 'post';
$postAmount = '10';
$loopOrder = 'DESC';

include('_inc-loop-one-page-single.php');
include('_inc-loop-to-list.php');
include('_inc-build-page.php');


?>
