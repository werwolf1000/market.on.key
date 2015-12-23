<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:05
 */
defined(ISHOP) or die('Access denied');

//Подключение модели
require_once MODEL;

//Подключение библиотеки функций
require_once '/function/function.php';

//Получение массива каталога
$cat = catalog();

//Получение массива информеров
$informers = informer();

$view = empty($_GET['view']) ? 'hits' : $_GET['view'];

catalog();
//подключение вида
require_once VIEW . TEMPLATE . 'index.php';