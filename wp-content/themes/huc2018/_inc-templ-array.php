<?php
for ($row = 0; $row < count($lists); $row++) {
    $templatePostSnip = $lists[$row][0];
    $postType = $lists[$row][1];
    $postAmount = $lists[$row][2];
    $loopOrder = $lists[$row][3];
    $varName = $lists[$row][4];
    include('_inc-loop-to-list.php');
}
?>
