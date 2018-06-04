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

$template = str_replace('{{items-staff}}', $allStaffItems, $template);
$template = str_replace('{{items-staff-results}}', $allStaffItemsTotal_results.' results', $template);

// Connections
$template = str_replace('{{connect-publications-staff}}', displayConnection('publications-staff'), $template);
$template = str_replace('{{connect-publications-project}}', displayConnection('publications-projects'), $template);
$template = str_replace('{{connect-staff-projects}}', displayConnection('staff-projects'), $template);
$template = str_replace('{{connect-staff-products}}', displayConnection('staff-products'), $template);


// external content from github
$template = str_replace('{{external-content-product-about}}', $Parsedown->text(getGithubTxt($postCustomMetaGithubName, '-about.md')), $template);
$template = str_replace('{{external-content-product-definition}}', $Parsedown->text(getGithubTxt($postCustomMetaGithubName, '-definition.md')), $template);
$template = str_replace('{{external-content-product-features}}', $Parsedown->text(getGithubTxt($postCustomMetaGithubName, '-features.md')), $template);
$template = str_replace('{{external-content-product-technology}}', $Parsedown->text(getGithubTxt($postCustomMetaGithubName, '-technology.md')), $template);
$template = str_replace('{{external-content-product-pitch}}', $Parsedown->text(getGithubTxt($postCustomMetaGithubName, '-pitch.md')), $template);

?>
