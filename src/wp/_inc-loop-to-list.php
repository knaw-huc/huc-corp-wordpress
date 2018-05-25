<?php


include('_inc-pagination.php');

// card snippit
$templatePosts =  file_get_contents(get_bloginfo('template_directory').'/'.$templatePostSnip);

//loop vars
$args = array(
  'post_type' => $postType,
  'posts_per_page' => $postAmount,
  'paged' => $paged,
  'orderby' => 'ID',
  'order' => $loopOrder,
  'category_name' => $loopTag,
  );

//paging init
$query = new WP_Query( $args );
global $query;
$total_results = $query->found_posts;

//the loop
if ( have_posts() ) :
  while ( $query->have_posts() ) : $query->the_post();
    $templatePostsBuild = str_replace("@@postTitle",get_the_title(), $templatePosts);
    $templatePostsBuild = str_replace("@@postContent",apply_filters( 'the_content', get_the_content('') ), $templatePostsBuild);
    $templatePostsBuild = str_replace("@@postDate", get_the_date(), $templatePostsBuild);
    $templatePostsBuild = str_replace("@@postLink", get_permalink( $post->ID ), $templatePostsBuild);
    $templatePostsBuild = str_replace("@@postId",get_the_ID(), $templatePostsBuild);
    $templatePostsBuild = str_replace("@@postThumb",get_the_post_thumbnail($page->ID, 'medium'), $templatePostsBuild);
    $allPostItems = $allPostItems.$templatePostsBuild;
  endwhile;

$paging = pagination($query->max_num_pages);
endif;





?>
