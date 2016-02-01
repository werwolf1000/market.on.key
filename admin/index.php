<?php

// запрет прямого обращения
define('ISHOP', TRUE);

// подключение файла конфигурации
require_once '../config.php';

// получение динамичной части шаблона #content
$view = empty($_GET['view']) ? 'pages' : $_GET['view'];

switch ($view) {
    case('pages'):
        // страницы
        break;

    case('informers'):
        // информеры
        break;

    default:
        // если из адресной строки получено имя несуществующего вида
        $view = 'pages';
}

// HEADER
include ADMIN_TEMPLATE . 'header.php';

// LEFTBAR
include ADMIN_TEMPLATE . 'leftbar.php';

// CONTENT
include ADMIN_TEMPLATE . $view . '.php';

?>