<?php
// lists
$template = str_replace('{{items-products}}', $allProductItems, $template);
$template = str_replace('{{items-products-results}}', $allProductItemsTotal_results.' results', $template);

$template = str_replace('{{items-vacatures}}', $allVacatureItems, $template);
$template = str_replace('{{items-vacatures-results}}', $allVacatureItemsTotal_results.' results', $template);

$template = str_replace('{{items-projects}}', $allProjectItems, $template);
$template = str_replace('{{items-projects-results}}', $allProjectItemsTotal_results.' results', $template);

$template = str_replace('{{items-publications}}', $allPublicationItems, $template);
$template = str_replace('{{items-publications-results}}', $allPublicationItemsTotal_results.' results', $template);

$template = str_replace('{{items-research-pages}}', '<div class="card-grid-inline"><div class="cards">'.$allResearchPages.'</div></div>', $template);
$template = str_replace('{{items-homepage}}', $allHomeItems, $template);

$template = str_replace('{{items-staff}}', $allStaffItems, $template);
$template = str_replace('{{items-staff-results}}', $allStaffItemsTotal_results.' results', $template);


if ($allUpdatesItems != '') {
  $template = str_replace('{{items-updates}}', '<h2>Updates</h2><div class=" updateItems">'.$allUpdatesItems.'</div>', $template);
  $template = str_replace('{{items-updates-results}}', $allUpdatesItemsTotal_results.' results', $template);
} else {
  $template = str_replace('{{items-updates}}', '', $template);
}


// Connections
$template = str_replace('{{connect-publications-staff}}', displayConnection('publications-staff'), $template);
$template = str_replace('{{connect-publications-project}}', displayConnection('publications-projects'), $template);
$template = str_replace('{{connect-staff-projects}}', '<h2>Staff2</h2><div class="card-grid-inline">'.displayConnection('staff-projects').'</div>', $template);
$template = str_replace('{{connect-staff-products}}', displayConnection('staff-products'), $template);
$template = str_replace('{{connect-partner-products}}', displayConnection('partner-products'), $template);
$template = str_replace('{{connect-partner-projects}}', displayConnection('partner-projects'), $template);

$template = str_replace('{{connect-page-projects}}', '<h2>Projects</h2><div class="card-grid-inline">'.displayConnection('page-projects').'</div>', $template);
$template = str_replace('{{connect-staff-page}}', '<h2>Staff</h2><div class="card-grid-inline">'.displayConnection('staff-page').'</div>', $template);
$template = str_replace('{{connect-publications-page}}', '<h2>Publications</h2><div class="card-grid-inline">'.displayConnection('publications-page').'</div>', $template);


if ($allProductItems != "") {
  $template = str_replace('{{cards}}', $allProductItems, $template);
}
if ($allResearchPages != "") {
  $template = str_replace('{{cards}}', $allResearchPages, $template);
}
if ($allNewsItems != "") {
  $template = str_replace('{{cards}}', $allNewsItems, $template);
}
if ($simpleList != "") {
  $template = str_replace('{{cards}}', $simpleList, $template);
}
if ($allUpdatesItems != "") {
  $template = str_replace('{{cards}}', $allUpdatesItems, $template);
}

?>
