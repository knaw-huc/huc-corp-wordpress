<?php
for ($row = 0; $row < count($lists); $row++) {
    $templatePostSnip = $lists[$row][0];
    $postType = $lists[$row][1];
    $postAmount = $lists[$row][2];
    $loopOrder = $lists[$row][3];
    $varName = $lists[$row][4];
    $searchWord = $lists[$row][5];
    $postParent = $lists[$row][6];
    include('_inc-build-2-items.php');
}
?>
