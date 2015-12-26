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
        $products = products($category); // получаем массив из модели
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


    default:
        // если из адресной строки получено имя несуществующего вида
        $view = 'hits';
        $eyestoppers = eyestopper('hits');
}
//подключение вида
require_once VIEW . TEMPLATE . 'index.php';
