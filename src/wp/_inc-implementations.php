<?php
$templatePostSnip = 'components/implementation.html';
$templateIm =  file_get_contents(get_bloginfo('template_directory').'/'.$templatePostSnip);

//loop vars
$argsIm = array(
  'post_type' => 'implementation',
  'posts_per_page' => '6',
  'orderby' => 'ID',
  'order' => 'DESC',
  'category_name' => $productName,
  );

  $query2 = new WP_Query( $argsIm );
  global $query2;

//the loop
if ( have_posts() ) :
  while ( $query2->have_posts() ) : $query2->the_post();
    $templateImBuild = str_replace("@@implTitle",get_the_title(), $templateIm);
    $templateImBuild = str_replace("@@implContent",apply_filters( 'the_content', get_the_content() ), $templateImBuild);
    $templateImBuild = str_replace("@@implLink", get_post_meta( get_the_ID(), 'wpcf-url', true ), $templateImBuild);


  //  $templateImBuild = str_replace("@@postLink", get_permalink( $post->ID ), $templateImBuild);
    //$templateImBuild = str_replace("@@postId",get_the_ID(), $templateImBuild);
    $allImItems = $allImItems.$templateImBuild;
  endwhile;


endif;





?>
