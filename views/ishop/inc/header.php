<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:33
 */
defined(ISHOP) or die('Access denied');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Главная</title>
    <script type="text/javascript" src="<?= VIEW . TEMPLATE ?>js/functions.js"></script>
    <link rel="stylesheet" href="<?= VIEW . TEMPLATE ?>css/style.css">
    <!--[if lt IE 9]>
    <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
    <![endif]-->
    <script type="text/javascript" src="<?= VIEW . TEMPLATE ?>js/functions.js"></script>
    <script type="text/javascript" src="<?= VIEW . TEMPLATE ?>js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="<?= VIEW . TEMPLATE ?>js/jquery-ui-1.8.22.custom.min.js"></script>
    <script type="text/javascript" src="<?= VIEW . TEMPLATE ?>js/jquery.cookie.js"></script>
    <script type="text/javascript" src="<?= VIEW . TEMPLATE ?>js/workscripts.js"></script>
</head>
<body>
<div class="main">
    <div class="header">
        <a href="/"><img class="logo" src="<?= VIEW . TEMPLATE ?>image/logo.jpg"
                         alt="Интернет магазин сотовых телефонов"></a>
        <img class="slogan" src="<?= VIEW . TEMPLATE ?>image/label.jpg" alt="слоган">

        <div class="head-contact">
            <p><span class="phone">Телефон:</span> <br>
                <span class="phone_number">8 (800) 700-00-01</span></p>

            <p class="reghim">Режим работы: <br>
                Будние дни: с 9:00 до 18:00 <br>
                Суббота, Воскресенье - выходные</p>
        </div>
        <form action="/" method="get" class="search">
            <ul class="search_head">
                <li><input type="text" name="search" id="quickquery" placeholder="Что вы хотите купить?"></li>
                <li><input type="image" src="<?= VIEW . TEMPLATE ?>image/search_button.jpg"></li>
            </ul>
        </form>

    </div>
    <ul class="menu">
        <li><a href="">Главная</a></li>
        <li><a href="">О магазине</a></li>
        <li><a href="">Оплата и доставка</a></li>
        <li><a href="">Покупка в кредит</a></li>
        <li><a href="">Контакты</a></li>
    </ul>
