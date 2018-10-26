<?php

$walkerMenu = wp_nav_menu( array(
  'menu'     => 'long-menu',
  'sub_menu' => true,
  'echo'  => false,
  'items_wrap'      => '%3$s',
  'before' => '',
  'after' => '',
  'container_class' => false
) );

//$walkerMenu = str_replace('/">', '/?pp=33&pn=142">', $walkerMenu);
//$walkerMenu = '<a href="#">< </a><br>'.$walkerMenu;
$walkerMenu = '<ul>'.$walkerMenu.'</ul>';

?>
