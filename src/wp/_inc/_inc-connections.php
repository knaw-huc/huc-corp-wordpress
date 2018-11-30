<?php
function displayConnection($type) {
  // Find connected pages
  $output = '';
  $connected = new WP_Query( array(
    'connected_type' => $type,
    'connected_items' => get_queried_object(),
    'nopaging' => true,
    'sortable' => 'any',
  ) );

  $localPath = realpath(dirname(__FILE__));
  if (strpos($type, 'staff') !== false) {
    $templateConnection =  file_get_contents($localPath.'/item-person.html');
  }else {
    $templateConnection =  file_get_contents($localPath.'/item-card.html');
  }




  // Display connected pages
  if ( $connected->have_posts() ) :

    while ( $connected->have_posts() ) : $connected->the_post();


      // if (strpos($type, 'partner') !== false) {
      //   $output = $output.'<a href="'.get_post_meta( get_the_ID(), 'wpcf-url', true ).'"><img src="images/'.get_post_meta( get_the_ID(), 'wpcf-image-name', true ).'" /></a>';


      $templateConnectionBuild = '';
      $templateConnectionBuild = str_replace("{{item-title}}",get_the_title(), $templateConnection);
      $templateConnectionBuild = str_replace("{{item-extract}}",get_the_excerpt(), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-content}}",apply_filters( 'the_content', get_the_content('') ), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-date}}", get_the_date(), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-link}}", get_permalink( $post->ID ), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-id}}",get_the_ID(), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-thumb}}",get_the_post_thumbnail($page->ID, 'thumbnail'), $templateConnectionBuild);

      $templateConnectionBuild = str_replace("{{item-staff-name}}",get_post_meta( get_the_ID(), 'wpcf-staff-name', true ), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-function}}",get_post_meta( get_the_ID(), 'wpcf-function', true ), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-phone}}",get_post_meta( get_the_ID(), 'wpcf-phone', true ), $templateConnectionBuild);
      $templateConnectionBuild = str_replace("{{item-email}}",get_post_meta( get_the_ID(), 'wpcf-email', true ), $templateConnectionBuild);
      $output = $output.$templateConnectionBuild;


    endwhile;
    wp_reset_postdata();

  endif;
  return $output;
}

// $postCustomMetastaffName = get_post_meta( get_the_ID(), 'wpcf-staff-name', true );
// $postCustomMetaFunction = get_post_meta( get_the_ID(), 'wpcf-function', true );
// $postCustomMetaEmail = get_post_meta( get_the_ID(), 'wpcf-email', true );
// $postCustomMetaPhone = get_post_meta( get_the_ID(), 'wpcf-phone', true );
// $postCustomMetaTwitter = get_post_meta( get_the_ID(), 'wpcf-twitter', true );
// $postCustomMetaDepartment = get_post_meta( get_the_ID(), 'wpcf-department', true );
?>
