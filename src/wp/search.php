<?php get_header(); ?>

<?php
global $wp_query;
$total_results = $wp_query->found_posts;

?>
<div class="result-info">
  Gezocht op <em><?php echo $_GET['s']; ?></em><br>
  <?php echo $total_results; ?> Resultaten gevonden.<br>
</div>
<div class="results">
<?php
if ( have_posts() ) : while ( have_posts() ) : the_post();
?>

  <div class="result-card">
    <a href="<?php the_permalink(); ?>">
      <img src="<?php bloginfo('wpurl'); ?>/wp-content/archive/350/<?php echo get_post_meta( get_the_ID(), 'wpcf-filename', true ); ?>" alt="">
      <br>
      <?php the_title();?>
    </a>
  </div>

<?php endwhile; endif; ?>
</div>
<?php get_footer(); ?>
