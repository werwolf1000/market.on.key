<?php defined('ISHOP') or die('Access denied'); ?>
<div class="catalog-index">

    <div class="kroshka">
        <a href="#">Мобильные телефоны</a> / <a href="#">LG</a> / <span>Слайдеры</span>
    </div>
    <!-- .kroshka -->
    <div class="vid-sort">
        Вид:
        <a href="#" id="grid" class="grid_list"><img src="<?= VIEW . TEMPLATE ?>image/vid-tabl.gif"
                                                     alt="табличный вид"/></a>
        <a href="#" id="list" class="grid_list"><img src="<?= VIEW . TEMPLATE ?>image/vid-line.gif" alt="линейный вид"/></a>
        &nbsp;&nbsp;
        Сортировать по:&nbsp;
        <a href="#" class="sort-top-act">цене</a> &nbsp;|&nbsp;
        <a href="#" class="sort-top">названию</a> &nbsp;|&nbsp;
        <a href="#" class="sort-bot">дате добавлеия</a>
    </div>
    <!-- .vid-sort -->

    <?php
    if ($page_count > 1) {
        pagination($page, $page_count);
    }
    ?>
    <?php if ($products): // если получены товары категории ?>
        <?php foreach ($products as $product): ?>
            <?php if (!isset($_COOKIE['display']) or $_COOKIE['display'] == 'grid'): // если вид - сетка ?>


                <!-- Табличный вид продуктов -->
                <div class="product-table">
                    <h2><a href="?view=product&goods_id=<?= $product['goods_id'] ?>"><?= $product['name'] ?></a></h2>

                    <div class="product-table-img">
                        <a href="?view=product&goods_id=<?= $product['goods_id'] ?>"><img
                                src="<?= VIEW . TEMPLATE ?>image/<?= $product['img'] ?>" alt="" width="64"/></a>

                        <div>
                            <!--иконки-->
                            <?php if ($product['hits']): ?>
                                <img src="<?= VIEW . TEMPLATE ?>image/ico-cat-lider.png" alt="лидер продаж"/>
                            <?php endif; ?>
                            <?php if ($product['sale']): ?>
                                <img src="<?= VIEW . TEMPLATE ?>image/ico-cat-sale.png" alt="распродажа"/>
                            <?php endif; ?>
                            <?php if ($product['new']): ?>
                                <img src="<?= VIEW . TEMPLATE ?>image/ico-cat-new.png" alt="новинка"/>
                            <?php endif; ?>
                            <!-- иконки -->
                        </div>
                    </div>
                    <p class="cat-table-more"><a
                            href="?view=product&goods_id=<?= $product['goods_id'] ?>">подробнее...</a></p>

                    <p>Цена : <span><?= $product['price'] ?></span></p>
                    <a href="?view=addtocart&goods_id=<?= $product['goods_id'] ?>"><img class="addtocard-index"
                                                                                        src="<?= VIEW . TEMPLATE ?>image/addcard-table.jpg"
                                                                                        alt="Добавить в корзину"/></a>
                </div> <!-- .product-table -->
                <!-- Табличный вид продуктов -->
            <?php else: // если линейный вид ?>
                <!-- Линейный вид продуктов -->
                <div class="product-line">
                    <div class="product-line-img">
                        <a href="?view=product&goods_id=<?= $product['goods_id'] ?>"><img
                                src="<?= VIEW . TEMPLATE ?>image/phone-line.jpg" alt=""/></a>
                    </div>
                    <div class="product-line-price">
                        <p>Цена : <span><?= $product['price'] ?></span></p>
                        <a href="?view=addtocart&goods_id=<?= $product['goods_id'] ?>"><img class="addtocard-index"
                                                                                            src="<?= VIEW . TEMPLATE ?>image/addcard-table.jpg"
                                                                                            alt="Добавить в корзину"/></a>

                        <div>

                            <!--иконки-->
                            <?php if ($product['hits']): ?>
                                <img src="<?= VIEW . TEMPLATE ?>image/ico-line-lider.jpg" alt="лидер продаж"/>
                            <?php endif; ?>
                            <?php if ($product['sale']): ?>
                                <img src="<?= VIEW . TEMPLATE ?>image/ico-line-new.jpg" alt="новинка"/>
                            <?php endif; ?>
                            <?php if ($product['new']): ?>
                                <img src="<?= VIEW . TEMPLATE ?>image/ico-line-sale.jpg" alt="распродажа"/>
                            <?php endif; ?>
                            <!-- иконки -->
                        </div>
                        <p class="cat-line-more"><a href="?view=addtocart&goods_id=<?= $product['goods_id'] ?>">подробнее...</a>
                        </p>
                    </div>
                    <div class="product-line-opis">
                        <h2><a href="?view=addtocart&goods_id=<?= $product['goods_id'] ?>"><?= $product['name'] ?></a>
                        </h2>

                        <p><?= $product['anons'] ?></p>
                    </div>
                </div>
                <!-- Линейный вид продуктов -->
            <?php endif; // конец условия переключателя видов  ?>
        <?php endforeach; ?>
        <div style="clear: both;"></div>

        <?php
        if ($page_count > 1) {
            pagination($page, $page_count);
        }
        ?>
    <?php else: ?>
        <p>Здесь товаров пока нет!</p>
    <?php endif; ?>
</div> <!-- .catalog-index -->
<script>
    $(function () {
        if ($.cookie("display") == null) {
            $.cookie("display", "grid");
        }
        $('#grid').on('click', function () {
            document.cookie = 'display=grid'
            location.assign('/' + location.search);
        });
        $('#list').on('click', function () {

            document.cookie = 'display=false'
            location.assign('/' + location.search);
        });

    });
</script>