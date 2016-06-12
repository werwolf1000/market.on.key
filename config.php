<?php

defined('ISHOP') or die('Access denied');

// домен
define('PATH', 'http://marketonkey.local/');

// модель
define('MODEL', 'model/model.php');

// контроллер
define('CONTROLLER', 'controller/controller.php');

// вид
define('VIEW', 'views/');

// папка с активным шаблоном
define('TEMPLATE', VIEW . 'ishop/');

// папка с картинками контента
define('PRODUCTIMG', PATH . 'userfiles/product_img/baseimg/');

// папка с картинками галереи
define('GALLERYIMG', PATH . 'userfiles/product_img/');

// сервер БД
define('HOST', 'localhost');

// пользователь
define('USER', 'root');

// пароль
define('PASS', '');

// БД
define('DB', 'ishop');

// название магазина - title
define('TITLE', 'Интернет магазин сотовых телефонов');

// email администратора
define('ADMIN_EMAIL', 'admin@ishop.com');

// количество товаров на страницу
define('PERPAGE', 9);

// папка шаблонов административной части
define('ADMIN_TEMPLATE', 'templates/');

// кол-во новостей на страницу
define('PERPAGE_NEW', 4);

define('ROOT_DIR_MY', '/apache/market.on.key/www/');

// максимально допустимый вес загружаемых картинок - 1 Мб
define('SIZE', 1048576);

mysql_connect(HOST, USER, PASS) or die('No connect to Server');
mysql_select_db(DB) or die('No connect to DB');
mysql_query("SET NAMES 'UTF8'") or die('Cant set charset');