<?php /* Template Name: updates */ ?>

<?php
$templatePage = 'news.html';
$templatePostSnip = 'components/content-updates-list--item.html';
$postType = 'post';
$postAmount = '10';
$loopOrder = 'DESC';


include('_inc-loop-to-list.php');
include('_inc-loop-one-page-single.php');
include('_inc-build-page.php');

?>
