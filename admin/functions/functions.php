<?php defined('ISHOP') or die('Access denied');

/* ====Каталог - получение массива=== */
function catalog()
{
    $query = "SELECT * FROM brands ORDER BY parent_id, brand_name";
    $res = mysql_query($query) or die(mysql_query());

    //массив категорий
    $cat = array();
    while ($row = mysql_fetch_assoc($res)) {
        if (!$row['parent_id']) {
            $cat[$row['brand_id']][] = $row['brand_name'];
        } else {
            $cat[$row['parent_id']]['sub'][$row['brand_id']] = $row['brand_name'];
        }
    }
    return $cat;
}

/* ====Каталог - получение массива=== */

/* ===Страницы=== */
function pages()
{
    $query = "SELECT page_id, title, position FROM pages ORDER BY position";
    $res = mysql_query($query);

    $pages = array();
    while ($row = mysql_fetch_assoc($res)) {
        $pages[] = $row;
    }
    return $pages;
}

/* ===Страницы=== */

?>