<?php
$categories = get_categories(); //wp_get_post_categories

$templateTag = 'element-tag.html';
$tagFormat =  file_get_contents(get_bloginfo('template_directory').'/'.$templateTag);

foreach ($categories as $categorie ) {
  if ($categorie->name != 'Uncategorized') {
    $tagCode = $tagFormat;
    $tagCode = str_replace("{{tag-name}}",$categorie->name, $tagCode);
    $tagCode = str_replace("{{tag-slug}}",$categorie->slug, $tagCode);
    $tagCode = str_replace("{{tag-id}}",$categorie->term_id, $tagCode);
    $tagCode = str_replace("{{tag-count}}",$categorie->category_count, $tagCode);

    $catsString = $catsString.$tagCode.' ';
  }

}
$siteCats = $catsString;
$catsString ='';
$tagCode ='';
?>
