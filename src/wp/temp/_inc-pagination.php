<?php
// numbered pagination
function pagination($pages = '', $range = 4)
{
     $out = '';
     $showitems = ($range * 2)+1;

     global $paged;
     if(empty($paged)) $paged = 1;

     if($pages == '')
     {
         global $wp_query;
         $pages = $wp_query->max_num_pages;
         if(!$pages)
         {
             $pages = 1;
         }
     }

     if(1 != $pages)
     {
         $out = $out."<div class=\"pagination\"><span>Page ".$paged." from ".$pages."</span>";
         if($paged > 2 && $paged > $range+1 && $showitems < $pages) {
         $out = $out."<a href='".get_pagenum_link(1)."'>&laquo; First</a>";}

         if($paged > 1 && $showitems < $pages)
         {$out = $out."<a href='".get_pagenum_link($paged - 1)."'>&lsaquo; Previous</a>";}

         for ($i=1; $i <= $pages; $i++)
         {
             if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
             {
                if ($paged == $i){
                  $out = $out."<span class=\"current\">".$i."</span>";
                }else{
                    $out = $out."<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";}
             }
         }

         if ($paged < $pages && $showitems < $pages)
         {$out = $out."<a href=\"".get_pagenum_link($paged + 1)."\">Next  &rsaquo;</a>";}
         if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages)
         {$out = $out."<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";}

         $out = $out."</div>\n";
     }
     return $out;
}
?>
