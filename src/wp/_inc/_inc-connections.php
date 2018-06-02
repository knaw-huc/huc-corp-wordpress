<?php
function displayConnection($type) {
  // Find connected pages
  $output = '';
  $connected = new WP_Query( array(
    'connected_type' => $type,
    'connected_items' => get_queried_object(),
    'nopaging' => true,
  ) );

  // Display connected pages
  if ( $connected->have_posts() ) :

    while ( $connected->have_posts() ) : $connected->the_post();
      $output = $output.'<a href="'.get_the_permalink().'">'.get_the_title().'</a>';

    endwhile;
    wp_reset_postdata();

  endif;
  return $output;
}

?>
