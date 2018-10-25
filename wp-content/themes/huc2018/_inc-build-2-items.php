<?php


// card snippit
$templatePosts =  file_get_contents(get_bloginfo('template_directory').'/'.$templatePostSnip);

if ($postType == 'page') {
  $order = 'menu_order';
}elseif ($postType == 'post') {
  $order = 'date';
}else {
  $order = 'ID';
}

//loop vars
$args = array(
  'post_type' => $postType,
  'posts_per_page' => $postAmount,
  'paged' => $paged,
  'orderby' => $order,
  'post_parent' => $postParent, //12404 //186
  'order' => $loopOrder,
  'category_name' => $loopTag,
  's' => $searchWord,
  );

//print_r ($args);

//paging init
wp_reset_query();
$query = new WP_Query( $args );
global $query;
${$varName.'Total_results'} = $query->found_posts;
//print_r ($query);

//the loop
if ( have_posts() ) :
  while ( $query->have_posts() ) : $query->the_post();
    //echo get_the_title();
    $templatePostsBuild = '';
    $templatePostsBuild = str_replace("{{item-title}}",get_the_title(), $templatePosts);
    $templatePostsBuild = str_replace("{{item-extract}}",get_the_excerpt(), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-content}}",apply_filters( 'the_content', get_the_content('') ), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-date}}", get_the_date(), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-link}}", get_permalink( $post->ID ), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-id}}",get_the_ID(), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-thumb}}",get_the_post_thumbnail($page->ID, 'medium'), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-staff-name}}",get_post_meta( get_the_ID(), 'wpcf-staff-name', true ), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-function}}",get_post_meta( get_the_ID(), 'wpcf-function', true ), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-phone}}",get_post_meta( get_the_ID(), 'wpcf-phone', true ), $templatePostsBuild);
    $templatePostsBuild = str_replace("{{item-email}}",get_post_meta( get_the_ID(), 'wpcf-email', true ), $templatePostsBuild);
    $$varName = $$varName.$templatePostsBuild;
  endwhile;


//$paging = pagination($query->max_num_pages);
endif;





?>
