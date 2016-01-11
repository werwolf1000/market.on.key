<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 14.12.2015
 * Time: 22:20
 */
defined(ISHOP) or die('Access denied');

/* Распечатка массива */
function print_arr($arr)
{

    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}

function addtocart($goods_id, $qty = '')
{
    if (isset($_SESSION['cart'][$goods_id])) {
        //ЕСли в массиве уже есть добавленный товар
        if ($qty == '') {
            $_SESSION['cart'][$goods_id]['qty'] += 1;
        } else {

            $_SESSION['cart'][$goods_id]['qty'] = $qty;
        }


    } else {
        //Если товар кладется в корзину впервые
        $_SESSION['cart'][$goods_id]['qty'] = 1;
    }
    return $_SESSION['cart'];
}

//Редирект после покупки
function redirect()
{
    $redirect = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : PATH;
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit;
}

function logout()
{

    unset($_SESSION['auth']);
}

/* ===кол-во товара в корзине + защита от ввода несуществующего ID товара=== */
function total_quantity()
{
    $_SESSION['total_quantity'] = 0;
    foreach ($_SESSION['cart'] as $key => $value) {
        if (isset($value['price'])) {
            // если получена цена товара из БД - суммируем кол-во
            $_SESSION['total_quantity'] += $value['qty'];
        } else {
            // иначе - удаляем такой ID из сессиии (корзины)
            unset($_SESSION['cart'][$key]);
        }
    }
}

/* ===кол-во товара в корзине + защита от ввода несуществующего ID товара=== */

/* ===Удаление из корзины=== */
function delete_from_cart($id)
{
    if ($_SESSION['cart']) {
        if (array_key_exists($id, $_SESSION['cart'])) {
            $_SESSION['total_quantity'] -= $_SESSION['cart'][$id]['qty'];
            $_SESSION['total_sum'] -= $_SESSION['cart'][$id]['qty'] * $_SESSION['cart'][$id]['price'];
            unset($_SESSION['cart'][$id]);
        }
    }
}

/* ===Фильтрация входящих данных=== */
function clear($var)
{
    $var = mysql_real_escape_string(strip_tags(trim($var)));
    return $var;
}

/* ===Фильтрация входящих данных=== */

/* ПОстраничная навигация */

function pagination($page = null, $pages_count = null)
{
    if ($_SERVER['QUERY_STRING']) { // если есть параметры в запросе
        foreach ($_GET as $key => $value) {
            // формируем строку параметров без номера страницы... номер передается параметром функции
            if ($key != 'page') $uri .= "{$key}={$value}&amp;";
        }
    }

    // формирование ссылок
    $back = ''; // ссылка НАЗАД
    $forward = ''; // ссылка ВПЕРЕД
    $startpage = ''; // ссылка В НАЧАЛО
    $endpage = ''; // ссылка В КОНЕЦ
    $page2left = ''; // вторая страница слева
    $page1left = ''; // первая страница слева
    $page2right = ''; // вторая страница справа
    $page1right = ''; // первая страница справа

    if ($page > 1) {
        $back = "<a class='nav_link' href='?{$uri}page=" . ($page - 1) . "#nav'>&lt;</a>";
    }
    if ($page < $pages_count) {
        $forward = "<a class='nav_link' href='?{$uri}page=" . ($page + 1) . "#nav'>&gt;</a>";
    }
    if ($page > 3) {
        $startpage = "<a class='nav_link' href='?{$uri}page=1#nav'>&laquo;</a>";
    }
    if ($page < ($pages_count - 2)) {
        $endpage = "<a class='nav_link' href='?{$uri}page={$pages_count}#nav'>&raquo;</a>";
    }
    if ($page - 2 > 0) {
        $page2left = "<a class='nav_link' href='?{$uri}page=" . ($page - 2) . "#nav'>" . ($page - 2) . "</a>";
    }
    if ($page - 1 > 0) {
        $page1left = "<a class='nav_link' href='?{$uri}page=" . ($page - 1) . "#nav'>" . ($page - 1) . "</a>";
    }
    if ($page + 2 <= $pages_count) {
        $page2right = "<a class='nav_link' href='?{$uri}page=" . ($page + 2) . "#nav'>" . ($page + 2) . "</a>";
    }
    if ($page + 1 <= $pages_count) {
        $page1right = "<a class='nav_link' href='?{$uri}page=" . ($page + 1) . "#nav'>" . ($page + 1) . "</a>";
    }

    // формируем вывод навигации
    echo '<div class="pagination">' . $startpage . $back . $page2left . $page1left . '<a class="nav_active">' . $page . '</a>' . $page1right . $page2right . $forward . $endpage . '</div>';


}


/* ПОстраничная навигация */