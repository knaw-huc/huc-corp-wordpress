<?php

include('_inc-navigation.php');
include('_inc-navigation-sub.php');
include('_inc-site-categories.php');


if ($postType == 'staff') {
  $postTitle = $postStaffName;
}


//relative path
$relPath = str_replace('https://','//', get_bloginfo('template_directory'));
$relPath = str_replace('http://','//', $relPath);

//Build page
$localPath = realpath(dirname(__FILE__));
$template =  file_get_contents($localPath.'/'.$templatePage);

//general
$template = str_replace('{{nav}}',$headerMenu, $template);
$template = str_replace('{{walker}}',$walkerMenu, $template);
$template = str_replace('{{nav-with-sub}}', $headerMenuWithSub, $template);
$template = str_replace("{{site-name}}",get_bloginfo('name'), $template);


//single
$template = str_replace("{{page-title}}",$postTitle, $template);
$template = str_replace("{{page-content}}",$postContent, $template);
$template = str_replace("{{page-date}}",$postDate, $template);
$template = str_replace("{{page-author}}",$postAuthor, $template);
$template = str_replace("{{page-link}}",$postLink, $template);
$template = str_replace("{{page-excerpt}}",$postExcerpt, $template);
$template = str_replace("{{page-hero-content}}",$postHero, $template);
$template = str_replace("{{page-feat-image}}",$postFeatImage, $template);

//custom fields
$template = str_replace("{{page-meta-keywords}}",$postCustomMetaKeywords, $template);
$template = str_replace("{{page-meta-github}}",$postCustomMetaGithubName, $template);

// categories
$template = str_replace("{{page-categories}}",$postCats, $template);
$template = str_replace("{{site-categories}}",$siteCats, $template);


// lists
$template = str_replace('{{items-posts}}', $allPostItems, $template);
$template = str_replace('{{items-posts-results}}', $allPostItemsTotal_results.' results', $template);
include('_inc-z-custom-build-list.php');


$template = str_replace('@@wpPaging',$paging, $template);

// final changes
$template = str_replace('href="css/','href="'.$relPath.'/css/', $template);
$template = str_replace('src="js/','src="'.$relPath.'/js/', $template);
$template = str_replace('src="images/','src="'.$relPath.'/images/', $template);
$template = str_replace('href="images/','href="'.$relPath.'/images/', $template);
$template = str_replace('https://huc.jauco.nl/','https://huc.knaw.nl/', $template);

echo $template;
?>
