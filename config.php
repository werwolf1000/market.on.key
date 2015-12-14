<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 18:32
 */
defined(ISHOP) or die('Access denied');

//Адрес сайта
define('PATH', 'http://marketonkey.local/');

//модель
define('MODEL', 'model/model.php');

//контроллер
define('CONTROLLER', 'controller/controller.php');

//вид
define('VIEW', 'views/');

//активный шаблон
define('TEMPLATE', 'ishop/');

//сервер БД
define('HOST', 'localhost');

//Пользователь
define('USER', 'root');

//Пароль
define('PASS', '');

//БД
define('DB', 'ishop');

//Название
define('TITLE', 'Интернет магазин сотовых телефонов');


mysql_connect('localhost', 'root', '') or die('соединение не удалось');

mysql_select_db('ishop');

mysql_query('SET NAMES utf8');




