<?php
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
?>
