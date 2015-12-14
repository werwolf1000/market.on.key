<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:33
 */
defined(ISHOP) or die('Access denied');
?>
<div id="right-bar">
    <div class="right-bar-cont">
        <div class="enter">
            <h2><span>Авторизация</span></h2>

            <div>
                <a href=""><img src="<?= VIEW . TEMPLATE ?>image/auth_button.png" alt="Кнопка авторизации"></a>
            </div>
        </div>
        <div class="basket">
            <h2><span>Корзина</span></h2>

            <div>
                <p>
                    У вас в корзине <br>
                    <span>1</span> товар на <span>30 459</span> руб
                </p>
                <a href=""><img src="<?= VIEW . TEMPLATE ?>image/oformit.jpg" alt=""></a>
            </div>
        </div>
        <div class="share-search">
            <h2><span>Выбор по параметрам</span></h2>

            <div>
                <form action="" method="post">
                    <p>Стоимость:</p>
                    от <input type="text" class="podbor-price" name="start-price">
                    до <input type="text" class="podbor-price" name="end-price">
                    руб.
                    <br><br>

                    <p>Производители:</p>
                    <select name="" id="">
                        <option value="">Ericsson</option>
                        <option value="">Alcatel</option>
                        <option value="">Mitsubish</option>
                        <option value="">Motorola</option>
                        <option value="">NEC</option>
                        <option value="">Nokia</option>
                    </select>
                    <input class="podbor" type="image" src="<?= VIEW . TEMPLATE ?>image/find_button.jpg">
                </form>
            </div>
        </div>
    </div>
</div>
