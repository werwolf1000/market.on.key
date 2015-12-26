<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:33
 */
defined(ISHOP) or die('Access denied');
?>

<div id="left-bar">
    <div class="left-bar-cont">
        <h2><span>Каталог</span></h2>

        <h3 class="nav-new"><a href="?view=new">Новинки</a></h3>

        <h3 class="nav-lider"><a href="?view=hits">Лидеры продаж</a></h3>

        <h3 class="nave-sale"><a href="?view=sale">Распродажа</a></h3>

        <h4><span>- Мобильные телефоны</span></h4>
        <ul class="nav-catalog" id="accordion">
            <?php foreach ($cat as $key => $item): ?>
                <?php if (count($item) > 1): // если это родительская категория ?>
                    <h3>
                        <li><a href="#"><?= $item[0] ?></a></li>
                    </h3>
                    <ul>
                        <li>- <a href="?view=cat&category=<?= $key ?>">Все модели</a></li>
                        <?php foreach ($item['sub'] as $key => $sub): ?>
                            <li>- <a href="?view=cat&category=<?= $key ?>"><?= $sub ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                <?php elseif ($item[0]): // если самостоятельная категория ?>
                    <li><a href="?view=cat&category=<?= $key ?>"><?= $item[0] ?></a></li>
                <?php endif; ?>
            <?php endforeach; ?>

        </ul>
        <div class="bar-contact">
            <h3>Контакты:</h3>

            <p><strong>Телефон:</strong><br>
                <span>8 (800) 700-00-01</span></p>

            <p><strong>Режим работы:</strong><br>
                Будние дни: <br>
                c 9:00 до 18:00 <br>
                Суббота, Воскресенье: <br>
                выходные</p>
        </div>
        <div class="news">
            <h3>Новости</h3>

            <p><span>24.03.2012</span>
                <a href="">Поступили в продажу новые
                    телефоны sumsung</a>
            </p>

            <p><span>24.03.2012</span>
                <a href="">Подарки всем купившим apple iphone 4s</a>
            </p>
            <a href="" class="news-arh">Архив новостей</a>
        </div>

        <!-- Информеры -->
        <?php foreach ($informers as $informer): ?>
            <div class="info">
                <h3><?= $informer[0] ?></h3>
                <?php foreach ($informer['sub'] as $key => $sub): ?>
                    <p>- <a href="?view=informer&id=<?= $key ?>"><?= $sub ?></a></p>
                <?php endforeach; ?>
            </div> <!-- .info -->
        <?php endforeach; ?>
        <!-- Информеры -->

    </div>
</div>
