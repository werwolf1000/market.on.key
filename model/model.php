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
function eyestopper($eyestopper)
{

    $sql = "SELECT `goods_id`,`name`, `img`, `price` FROM goods WHERE `visible`= '1' AND $eyestopper = '1'";

    $result = mysql_query($sql) or die(mysql_error());
    $eyestopper = array();

    while ($row = mysql_fetch_assoc($result)) {
        $eyestopper[] = $row;
    }
    return $eyestopper;

}

/*  Массив товаров по категории */
function products($category)
{
    $query = "SELECT `goods_id`, `name`, `img`,`anons`, `price`,`hits`, `new`, `sale` FROM `goods` WHERE `goods_brandid` = $category AND `visible` = '1'
                UNION
              SELECT `goods_id`, `name`, `img`,`anons`, `price`,`hits`, `new`, `sale`  FROM `goods` WHERE `goods_brandid` IN(SELECT `brand_id` FROM `brands` WHERE `parent_id` = $category) AND `visible` = '1'";

    $products = array();
    $result = mysql_query($query) or die(mysql_error());
    while ($row = mysql_fetch_assoc($result)) {
        $products[] = $row;
    }
    return $products;

}

//Сумма заказов в корзине + аттрибуты товара
function total_sum($goods)
{
    $total_sum = 0;
    $goods = implode(',', array_keys($_SESSION['cart']));
    $sql = "SELECT `goods_id`,`name`,`price` FROM `goods` WHERE `goods_id` IN($goods);";
    $res = mysql_query($sql) or die(mysql_error());
    while ($row = mysql_fetch_assoc($res)) {
        $_SESSION['cart'][$row['goods_id']]['name'] = $row['name'];
        $_SESSION['cart'][$row['goods_id']]['price'] = $row['price'];
        $total_sum += $_SESSION['cart'][$row['goods_id']]['qty'] * $row['price'];

    }
    return $total_sum;

}





