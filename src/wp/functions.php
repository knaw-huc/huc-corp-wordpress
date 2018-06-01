<?php

register_nav_menus( array(
	'header-menu' => 'Hoofdmenu',
	'long-menu' => 'Lang hoofdmenu',
	'footer-menu' => 'Footer menu',
) );

add_theme_support( 'post-thumbnails' );
add_post_type_support( 'page', 'excerpt' );

add_filter( 'use_default_gallery_style', '__return_false' );



include('functions-connections.php');
?>
