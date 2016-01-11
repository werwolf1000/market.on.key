<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:05
 */
defined(ISHOP) or die('Access denied');

session_start();

//Подключение модели
require_once MODEL;

//Подключение библиотеки функций
require_once '/function/function.php';

//Получение массива каталога
$cat = catalog();

//Получение массива информеров
$informers = informer();

// Регистрация
if ($_POST['reg']) {
    registration();
    redirect();
}
if ($_GET['do'] == 'logout') {
    logout();
    redirect();
}

if ($_POST['auth']) {

    authorization();
    redirect();
}

$view = empty($_GET['view']) ? 'hits' : $_GET['view'];

switch ($view) {
    case('hits'):
        // лидеры продаж
        $eyestoppers = eyestopper('hits');
        break;

    case('new'):
        // новинки
        $eyestoppers = eyestopper('new');
        break;

    case('sale'):
        // распродажа
        $eyestoppers = eyestopper('sale');
        break;
    case('cat'):
        // товары категории
        $category = abs((int)$_GET['category']);

        //Параметры для навигации
        $perpage = PERPAGE; //кол-во товаров на страницу
        if (isset($_GET['page'])) {
            $page = ((abs((int)$_GET['page'])) == 0) ? 1 : (abs((int)$_GET['page']));

        } else {
            $page = 1;
        }

        $count_rows = count_rows($category);
        $page_count = ceil($count_rows / $perpage);
        if (!$page_count) {
            $page_count = 1;//минимум одна страница
        }
        /*  if($page > $page_count){
              $page = $page_count;//если запрошенна страница больше максимума
          }*/
        $start_pos = ($page - 1) * $perpage;
        $products = products($category, $start_pos, $perpage); // получаем массив из модели
        break;
    case('addtocart'):
        $goods_id = $_GET['goods_id'];
        addtocart($goods_id);
        $_SESSION['total_sum'] = total_sum($_SESSION['cart']);

        //Колличество товара в корзине + защита о ввода несуществующего id товара
        $_SESSION['total_quantity'] = 0;

        foreach ($_SESSION['cart'] as $key => $val) {//Проверка

            if (isset($val['price'])) {

                //Если получена цена товара из БД суммируем колличество
                $_SESSION['total_quantity'] += $val['qty'];
            } else {
                // Иначе удаляем id из сессии
                unset($_SESSION['cart'][$key]);
            }
        }
        redirect();
        break;
    case('reg'):
        break;
    case('cart'):
        // пересчет товаров в корзине
        if (isset($_GET['id'], $_GET['qty'])) {

            $goods_id = abs((int)$_GET['id']);
            $qty = abs((int)$_GET['qty']);

            //$qty = $qty - $_SESSION['cart'][$goods_id]['qty'];

            addtocart($goods_id, $qty);

            $_SESSION['total_sum'] = total_sum($_SESSION['cart']); // сумма заказа

            total_quantity(); // кол-во товара в корзине + защита от ввода несуществующего ID товара
            redirect();
        }
        /* ===Удаление из корзины=== */

        if (isset($_GET['delete'])) {
            $id = abs((int)$_GET['delete']);
            if ($id) {
                delete_from_cart($id);
            }
            redirect();
        }
        /* Получение способов доставки*/
        $dostavka = get_dostavka();
        if ($_POST['order_x']) {
            add_order();
            redirect();

        }
        break;

    case('search'):
        //Поиск
        $search_total = search_total_rows();
        if (isset($_GET['page'])) {
            $page = $_GET['page'];
        } else {
            $page = 1;
        }
        $result_search = search($page, $search_total);
        break;

    case('filter'):
        // выбор по параметрам
        $startprice = (int)$_GET['startprice'];
        $endprice = (int)$_GET['endprice'];
        $brand = array();

        if ($_GET['brand']) {
            foreach ($_GET['brand'] as $value) {
                $value = (int)$value;
                $brand[$value] = $value;
            }
        }
        if ($brand) {
            $category = implode(',', $brand);
        }
        $products = filter($category, $startprice, $endprice);
        break;
    default:
        // если из адресной строки получено имя несуществующего вида
        $view = 'hits';
        $eyestoppers = eyestopper('hits');
}
//подключение вида
require_once VIEW . TEMPLATE . 'index.php';
