<?php

include('_inc-page-categories.php');    //  get page catergories
//include('_inc-connections.php');        //  get connections from other custom post types
include('_inc-func.php');
// card snippit
$localPath = realpath(dirname(__FILE__));
$templatePosts =  file_get_contents($localPath.'/'.$templatePostSnip);

//the loop
if ( have_posts() ) : while ( have_posts() ) : the_post();



    $templatePostsBuild = '';
    $templatePostsBuild = str_replace("{{item-title}}",get_the_title(), $templatePosts);//get_the_ID();
    // $templatePostsBuild = str_replace("{{item-content}}",apply_filters( 'the_content', get_the_content('') ), $templatePostsBuild);
     $templatePostsBuild = str_replace("{{item-date}}", get_the_date(), $templatePostsBuild);
    // $templatePostsBuild = str_replace("{{item-link}}", get_permalink( $post->ID ), $templatePostsBuild);
    // $templatePostsBuild = str_replace("{{item-id}}",get_the_ID(), $templatePostsBuild);
     $templatePostsBuild = str_replace("{{item-categories}}",$cats, $templatePostsBuild);
    // $templatePostsBuild = str_replace("{{item-author}}",get_the_author(), $templatePostsBuild);
    // $templatePostsBuild = str_replace("{{item-thumb}}",get_the_post_thumbnail($page->ID, 'thumbnail'), $templatePostsBuild);
    // $templatePostsBuild = str_replace("{{item-resourceOwner}}", instellingenPerItem(get_the_ID()), $templatePostsBuild);
    // $templatePostsBuild = str_replace("{{item-resourceURL}}", get_post_meta( get_the_ID(), 'wpcf-resource-url', true ), $templatePostsBuild);
     //$templatePostsBuild = str_replace("{{item-tags}}",onderwerpenPerItem(get_the_ID()), $templatePostsBuild);
    //

    $simpleList = $simpleList.$templatePostsBuild;
endwhile; endif;

?>
