<?php

include('_inc-navigation.php');


//relative path
$relPath = str_replace('https://','//', get_bloginfo('template_directory'));
$relPath = str_replace('http://','//', $relPath);

//Build page
$template =  file_get_contents(get_bloginfo('template_directory').'/'.$templatePage);

//single
$template = str_replace("{{page-title}}",$postTitle, $template);
$template = str_replace("{{page-content}}",$postContent, $template);
$template = str_replace("{{page-date}}",$postDate, $template);
$template = str_replace("{{page-author}}",$postAuthor, $template);
$template = str_replace("{{page-link}}",$postLink, $template);
$template = str_replace("{{page-hero-content}}",$postHero, $template);


// list
$template = str_replace('{{page-items}}', $allPostItems, $template);
$template = str_replace('{{page-results}}', $total_results.' results', $template);
$template = str_replace('@@wpPaging',$paging, $template);

//general
$template = str_replace('{{nav}}',$headerMenu, $template);
$template = str_replace("{{site-name}}",get_bloginfo('name'), $template);
//include('_inc-build-page-custom.php');

$template = str_replace('href="css/','href="'.$relPath.'/css/', $template);
$template = str_replace('src="js/','src="'.$relPath.'/js/', $template);
$template = str_replace('src="images/','src="'.$relPath.'/images/', $template);

echo $template;
?>
