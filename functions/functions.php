<?php

defined('ISHOP') or die('Access denied');

/* ===Распечатка массива=== */
function print_arr($arr)
{
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
}

/* ===Распечатка массива тест=== */

/* ===Фильтрация входящих данных=== */
function clear($var)
{
    $var = mysql_real_escape_string(strip_tags(trim($var)));
    return $var;
}

/* ===Фильтрация входящих данных=== */

/* ===Редирект=== */
function redirect()
{
    $redirect = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : PATH;
    header("Location: $redirect");
    exit;
}

/* ===Редирект=== */

/* ===Выход пользователя=== */
function logout()
{
    unset($_SESSION['auth']);
}

/* ===Выход пользователя=== */

/* ===Добавление в корзину=== */
function addtocart($goods_id, $qty = 1)
{
    if (isset($_SESSION['cart'][$goods_id])) {
        // если в массиве cart уже есть добавляемый товар
        $_SESSION['cart'][$goods_id]['qty'] += $qty;
        return $_SESSION['cart'];
    } else {
        // если товар кладется в корзину впервые
        $_SESSION['cart'][$goods_id]['qty'] = $qty;
        return $_SESSION['cart'];
    }
}

/* ===Добавление в корзину=== */

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

/* ===Удаление из корзины=== */

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

/* ===Постраничная навигация=== */
function pagination($page, $pages_count)
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
        $back = "<a class='nav_link' href='?{$uri}page=" . ($page - 1) . "'>&lt;</a>";
    }
    if ($page < $pages_count) {
        $forward = "<a class='nav_link' href='?{$uri}page=" . ($page + 1) . "'>&gt;</a>";
    }
    if ($page > 3) {
        $startpage = "<a class='nav_link' href='?{$uri}page=1'>&laquo;</a>";
    }
    if ($page < ($pages_count - 2)) {
        $endpage = "<a class='nav_link' href='?{$uri}page={$pages_count}'>&raquo;</a>";
    }
    if ($page - 2 > 0) {
        $page2left = "<a class='nav_link' href='?{$uri}page=" . ($page - 2) . "'>" . ($page - 2) . "</a>";
    }
    if ($page - 1 > 0) {
        $page1left = "<a class='nav_link' href='?{$uri}page=" . ($page - 1) . "'>" . ($page - 1) . "</a>";
    }
    if ($page + 2 <= $pages_count) {
        $page2right = "<a class='nav_link' href='?{$uri}page=" . ($page + 2) . "'>" . ($page + 2) . "</a>";
    }
    if ($page + 1 <= $pages_count) {
        $page1right = "<a class='nav_link' href='?{$uri}page=" . ($page + 1) . "'>" . ($page + 1) . "</a>";
    }

    // формируем вывод навигации
    echo '<div class="pagination">' . $startpage . $back . $page2left . $page1left . '<a class="nav_active">' . $page . '</a>' . $page1right . $page2right . $forward . $endpage . '</div>';
}

/* ===Постраничная навигация=== */

/* ===Количество новостей=== */
function count_news()
{
    $query = "SELECT COUNT(news_id) FROM news";
    $res = mysql_query($query);

    $count_news = mysql_fetch_row($res);
    return $count_news[0];
}

/* ===Количество новостей=== */

/* ===Архив новостей=== */
function get_all_news($start_pos, $perpage)
{
    $query = "SELECT news_id, title, anons, date FROM news ORDER BY news_id DESC LIMIT $start_pos, $perpage";
    $res = mysql_query($query);

    $all_news = array();
    while ($row = mysql_fetch_assoc($res)) {
        $all_news[] = $row;
    }
    return $all_news;
}
/* ===Архив новостей=== */


















