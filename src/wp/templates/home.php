<?php
include('_inc-navigation.php');
echo $headerMenu ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<h1><?php the_title(); ?></h1>
<?php the_content(__('(more...)')); ?>
<?php endwhile; else: ?>
<?php endif; ?>
