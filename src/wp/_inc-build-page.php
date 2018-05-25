<?php

include('_inc-navigation.php');


//relative path
$relPath = str_replace('https://','//', get_bloginfo('template_directory'));
$relPath = str_replace('http://','//', $relPath);

//Build page
$template =  file_get_contents(get_bloginfo('template_directory').'/'.$templatePage);

//single
$template = str_replace("@@postTitle",$postTitle, $template);
$template = str_replace("@@postContent",$postContent, $template);
$template = str_replace("@@postDate",$postDate, $template);
$template = str_replace("@@postAuthor",$postAuthor, $template);
$template = str_replace("@@postLink",$postLink, $template);
$template = str_replace("@@heroContent",$postHero, $template);


// list
$template = str_replace('@@posts', $allPostItems, $template);
$template = str_replace('@@results', $total_results.' results<br>', $template);
$template = str_replace('@@wpPaging',$paging, $template);

//genaral
$template = str_replace('@@nav',$headerMenu, $template);
$template = str_replace("@@sitename",get_bloginfo('name'), $template);
include('_inc-build-page-custom.php');

$template = str_replace('href="css/','href="'.$relPath.'/css/', $template);
$template = str_replace('src="js/','src="'.$relPath.'/js/', $template);
$template = str_replace('src="images/','src="'.$relPath.'/images/', $template);

echo $template;
?>
