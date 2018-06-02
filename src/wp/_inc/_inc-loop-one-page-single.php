<?php

if (have_posts()) : while (have_posts()) : the_post();
  $postTitle = get_the_title();
  $postContent = apply_filters( 'the_content', get_the_content() );
  $postDate = get_the_date();
  $postAuthor = get_the_author();
  $postLink = get_the_permalink();
  $postCustomVal01 = get_the_title();
  include('_inc-page-categories.php');
  include('_inc-connections.php');

endwhile; else:
endif;
wp_reset_postdata();
?>
