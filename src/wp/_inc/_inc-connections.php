<?php
function displayConnection() {
  // Find connected pages
  $output = 'hi';
  $connected = new WP_Query( array(
    'connected_type' => 'publications-staff',
    'connected_items' => get_queried_object(),
    'nopaging' => true,
  ) );

  // Display connected pages
  if ( $connected->have_posts() ) :

    while ( $connected->have_posts() ) : $connected->the_post();
      $output = $output.get_the_title().get_the_permalink();

    endwhile;
    wp_reset_postdata();

  endif;
}
return $output;
?>
