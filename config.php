<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 18:32
 */
//Адрес сайта
define('PATH', 'http://marketonkey.local/');

//модель
define('MODEL', 'model/model.php');

//контроллер
define('CONTROLLER', 'controller/controller.php');

//вид
define('VIEW', 'views/');

//активный шаблон
define('TEMPLATE', 'ishop');

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

try {
    $db = new PDO('mysql:host=localhost;dbname=ishop', USER, PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec('SET NAMES utf8');
} catch (PDOException $e) {
    echo $e->getMessage();
    exit;
}



