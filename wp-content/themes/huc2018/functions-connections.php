<?php
function my_connection_types() {
	p2p_register_connection_type( array(
		'name' => 'publications-staff',
		'from' => 'publications',
		'to' => 'staff'
	) );

	p2p_register_connection_type( array(
		'name' => 'publications-projects',
		'from' => 'publications',
		'to' => 'projects'
	) );


		p2p_register_connection_type( array(
			'name' => 'staff-projects',
			'from' => 'staff',
			'to' => 'projects'
		) );


		p2p_register_connection_type( array(
			'name' => 'staff-products',
			'from' => 'staff',
			'to' => 'products'
		) );


}
add_action( 'p2p_init', 'my_connection_types' );
?>
