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

/* Информеры - получение массива */
function informer()
{

    $sql = 'SELECT informers.informer_id,informers.informer_name, informers.informer_name, links.link_id, links.parent_informer, links.link_name
FROM `links`
INNER JOIN `informers` ON links.parent_informer = informers.informer_id
			ORDER BY informers.informer_position, links.links_position';

    $res = mysql_query($sql) or die(mysql_query());

    $informers = array();
    $name = ''; //Флаг имени информера
    while ($row = mysql_fetch_array($res, MYSQL_ASSOC)) {
        if ($row['informer_name'] != $name) { //усли такго информера еще нет
            $informers[$row['informer_id']][] = $row['informer_name']; //Добавление информера
            $name = $row['informer_name'];
        }
        $informers[$row['parent_informer']]['sub'][$row['link_id']] = $row['link_name'];//Заносим страницы в информер
    }
    return $informers;
}

/* Айстопперы новиеки, лидеры, распроджа*/
function eyestoper($eyestopper)
{

    $sql = "SELECT `goods_id`,`name`, `img`, `price` FROM goods WHERE `visible`= '1' AND $eyestopper = '1'";

    $result = mysql_query($sql) or die(mysql_error());
    $eyestopper = array();

    while ($row = mysql_fetch_assoc($result)) {
        $eyestopper[] = $row;
    }
    return $eyestopper;

}





