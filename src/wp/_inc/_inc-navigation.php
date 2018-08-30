<?php
$headerMenuRaw = wp_nav_menu(array('theme_location' => 'header-menu','container'  => '', 'echo'  => false, 'items_wrap'      => '%3$s','before' => '','after' => '','container_class' => false));
//$headerMenu = strip_tags($headerMenuRaw, '<a>' );
$headerMenu = '<ul>'.$headerMenuRaw.'</ul>';



?>
