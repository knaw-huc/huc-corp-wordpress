<?php
include('_inc-navigation.php');
$templatePage = 'home.html';
$templatePostSnip = 'components/content-updates-list--item.html';
$loopOrder = 'DESC';

include('_inc-loop-to-list.php');

$the_query2 = new WP_Query( array(
                'showposts' => '1',
                'pagename' => 'Cover' ) );
if ( $the_query2->have_posts() ) {
  while ( $the_query2->have_posts() ) {
        $the_query2->the_post();

        $postHero = apply_filters( 'the_content', get_the_content() );
    }
    wp_reset_postdata();
  } else {
}


// get data for home / single item
$the_query = new WP_Query( array(
                'showposts' => '1',
                'pagename' => 'homepage' ) );
if ( $the_query->have_posts() ) {
  while ( $the_query->have_posts() ) {
        $the_query->the_post();
        $postTitle = get_the_title();
        $postContent = apply_filters( 'the_content', get_the_content() );
    }
    wp_reset_postdata();
  } else {
}



include('_inc-build-page.php');
?>
