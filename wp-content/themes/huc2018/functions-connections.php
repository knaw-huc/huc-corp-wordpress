<?php
function my_connection_types() {
	p2p_register_connection_type( array(
		'name' => 'publications-staff',
		'from' => 'publications',
		'to' => 'staff'
	) );
}
add_action( 'p2p_init', 'my_connection_types' );
?>
