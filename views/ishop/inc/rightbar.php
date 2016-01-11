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

        <!--  авторизация -->
        <div class="enter">
            <h2><span>Авторизация</span></h2>

            <div class="authform">
                <?php if (!$_SESSION['auth']['user']): ?>
                    <form action="/" method="post" enctype="application/x-www-form-urlencoded">
                        <label for="login" style="float: left; margin-left: 30px">Логин</label><br>
                        <input placeholder="ваш логин" type="text" name="login" id="login"><br>
                        <label for="pass" style="float: left; margin-left: 30px; margin-top: 10px;">Пароль</label><br>
                        <input placeholder="ваш пароль" type="text" name="pass" id="pass"><br><br>
                        <input type="submit" name="auth" value="Войти" id="auth"><br><br>

                        <p class="link"><a href="?view=reg">регистрация</a></p>
                        <?php
                        if (isset($_SESSION['auth']['error'])) {
                            echo $_SESSION['auth']['error'];
                            unset($_SESSION['auth']);
                        }
                        ?>

                    </form>
                <?php else: ?>
                    <p>Добро пожаловать, <?= $_SESSION['auth']['user'] ?></p>

                    <a href="?do=logout">выход</a>
                <?php endif; ?>


                <!-- <a href=""><img src="<? /*= VIEW . TEMPLATE */ ?>image/auth_button.png" alt="Кнопка авторизации"></a>-->
            </div>
        </div>
        <!-- Авторизация -->



        <div class="basket">
            <h2><span>Корзина</span></h2>

            <div>
                <p>

                    <?php if ($_SESSION['total_quantity']): ?>
                        У вас в корзине <br>
                        <span><?= $_SESSION['total_quantity'] ?></span> товар(-ов) на
                        <span><?= $_SESSION['total_sum'] ?></span> руб
                        <a href="?view=cart"><img src="<?= VIEW . TEMPLATE ?>image/oformit.jpg" alt=""></a>

                    <?php else: ?>
                        <strong>Корзина пуста</strong>  <br><br>
                    <?php endif; ?>



                </p>


            </div>
        </div>
        <div class="share-search">
            <h2><span>Выбор по параметрам</span></h2>
            <div>
                <form method="get">
                    <input type="hidden" name="view" value="filter"/>
                    <p>Стоимость:</p>
                    от <input class="podbor-price" type="text" name="startprice"/>
                    до <input class="podbor-price" type="text" name="endprice"/>
                    руб.
                    <br/><br/>
                    <p>Производители:</p>
                    <?php foreach ($cat as $key => $item): ?>
                        <?php if ($item[0]): ?>
                            <input type="checkbox" name="brand[]" value="<?= $key ?>"
                                   id="<?= $key ?>" <?php if ($key == $brand[$key]) echo "checked" ?> />
                            <label for="<?= $key ?>"><?= $item[0] ?></label> <br/>
                        <?php endif; ?>
                    <?php endforeach; ?>

                    <input class="podbor" type="image" src="<?= VIEW . TEMPLATE ?>image/podbor.jpg"/>
                </form>
            </div>
        </div>
    </div>
</div>
