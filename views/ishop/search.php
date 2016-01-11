<?php defined('ISHOP') or die('Access denied'); ?>
<div class="catalog-index">
    <h1>Результаты поиска</h1>
    <?php if ($result_search['notfound']): // если ничего не найдено ?>
        <?php echo $result_search['notfound'] ?>
    <?php else: // если есть результаты поиска ?>
        <!-- Табличный вид продуктов -->
        <?php
        if (($search_total / PERPAGE) > 1) {

            pagination($page, $search_total / PERPAGE);
        }
        ?>
        <?php foreach ($result_search as $product): ?>
            <div class="product-table">
                <h2><a href="?view=product&amp;goods_id=<?= $product['goods_id'] ?>"><?= $product['name'] ?></a></h2>

                <div class="product-table-img">
                    <a href="?view=product&amp;goods_id=<?= $product['goods_id'] ?>"><img
                            src="<?= PRODUCTIMG ?><?= $product['img'] ?>" alt="" width="64"/></a>

                    <div> <!-- Иконки -->
                        <?php if ($product['hits']) echo '<img src="' . VIEW . TEMPLATE . 'image/ico-cat-lider.png" alt="лидеры продаж" />'; ?>
                        <?php if ($product['new']) echo '<img src="' . VIEW . TEMPLATE . 'image/ico-cat-new.png" alt="новинка" />'; ?>
                        <?php if ($product['sale']) echo '<img src="' . VIEW . TEMPLATE . 'image/ico-cat-sale.png" alt="распродажа" />'; ?>
                    </div>
                    <!-- Иконки -->
                </div>
                <p class="cat-table-more"><a
                        href="?view=product&amp;goods_id=<?= $product['goods_id'] ?>">подробнее...</a></p>

                <p>Цена : <span><?= $product['price'] ?></span></p>
                <a href="?view=addtocart&amp;goods_id=<?= $product['goods_id'] ?>"><img class="addtocard-index"
                                                                                        src="<?= VIEW . TEMPLATE ?>image/addcard-table.jpg"
                                                                                        alt="Добавить в корзину"/></a>
            </div> <!-- .product-table -->
            <!-- Табличный вид продуктов -->
        <?php endforeach; ?>
        <?php
        if (($search_total / PERPAGE) > 1) {

            pagination($page, $search_total / PERPAGE);
        }
        ?>
    <?php endif; ?>
</div> <!-- .catalog-index -->