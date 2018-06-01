<?php
$categories = get_the_category(); //wp_get_post_categories

$templateTag = 'element-tag.html';
$tagFormat =  file_get_contents(get_bloginfo('template_directory').'/'.$templateTag);

foreach ($categories as $categorie ) {
  $tagCode = $tagFormat;
  $tagCode = str_replace("{{tag-name}}",$categorie->name, $tagCode);
  $tagCode = str_replace("{{tag-id}}",$categorie->term_id, $tagCode);
  $tagCode = str_replace("{{tag-count}}",$categorie->category_count, $tagCode);

  $catsString = $catsString.$tagCode.' ';
}
$postCats = $catsString;
$catsString ='';
$tagCode ='';
?>
