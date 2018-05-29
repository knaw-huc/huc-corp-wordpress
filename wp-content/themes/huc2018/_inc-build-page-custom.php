<?php

$template = str_replace('@@implementations',$allImItems, $template);
$template = str_replace('@@about',$productAbout, $template);
$template = str_replace('@@features',$productFeatures, $template);
$template = str_replace('@@technology',$productTechnology, $template);
$template = str_replace('@@roadmap',$productRoadmap, $template);
$template = str_replace('@@team', $allTeamItems, $template);

?>
