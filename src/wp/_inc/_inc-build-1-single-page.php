<?php

if (have_posts()) : while (have_posts()) : the_post();
  $postTitle = get_the_title();
  $postContent = apply_filters( 'the_content', get_the_content() );
  $postDate = get_the_date();
  $postAuthor = get_the_author();
  $postLink = get_the_permalink();
  $postExcerpt = get_the_excerpt();

  include('_inc-z-custom-build-custom-fields.php');

  include('_inc-page-categories.php');    //  get page catergories
  include('_inc-connections.php');        //  get connections from other custom post types

endwhile; else:
endif;
wp_reset_postdata();
?>
