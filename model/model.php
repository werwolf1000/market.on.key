<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:07
 */
defined(ISHOP) or die('Access denied');

//Получение массива категорий

function catalog()
{
    $query = 'SELECT * FROM brands order by parent_id, brand_name';
    $res = mysql_query($query);
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
