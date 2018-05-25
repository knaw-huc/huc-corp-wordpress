<?php
$templatePostSnip = 'components/teamMember.html';
$templateTeam =  file_get_contents(get_bloginfo('template_directory').'/'.$templatePostSnip);

//loop vars
$argsTeam = array(
  'post_type' => 'team-member',
  'posts_per_page' => '16',
  'orderby' => 'ID',
  'order' => 'DESC',
  'category_name' => $productName,
  );

  $query3 = new WP_Query( $argsTeam );
  global $query3;

//the loop
if ( have_posts() ) :
  while ( $query3->have_posts() ) : $query3->the_post();
    $templateTeamBuild = str_replace("@@teamTitle",get_the_title(), $templateTeam);

    $templateTeamBuild = str_replace("@@teamRole", get_post_meta( get_the_ID(), 'wpcf-role', true ), $templateTeamBuild);

    $allTeamItems = $allTeamItems.$templateTeamBuild;
  endwhile;


endif;





?>
