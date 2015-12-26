<?php defined('ISHOP') or die('Access denied'); ?>
<div class="catalog-index">
    <h1><img src="<?= VIEW . TEMPLATE ?>image/lider-sale.jpg" alt="Лидеры продаж"/></h1>

    <?php if ($eyestoppers): ?>
        <?php foreach ($eyestoppers as $eyestopper): ?>
            <div class="product-index">
                <h2><a href="?view=product&goods_id=<?= $eyestopper['goods_id'] ?>"><?= $eyestopper['name'] ?></a></h2>
                <a href="?view=product&goods_id=<?= $eyestopper['goods_id'] ?>"><img
                        src="<?= VIEW . TEMPLATE ?>image/<?= $eyestopper['img'] ?>" alt=""/></a>

                <p>Цена : <span><?= $eyestopper['price'] ?>.</span></p>
                <a href="?view=addtocart&goods_id=<?= $eyestopper['goods_id'] ?>"><img class="addtocard-index"
                                                                                       src="<?= VIEW . TEMPLATE ?>image/addcard-index.jpg"
                                                                                       alt="Добавить в карзину"/></a>
            </div>
        <?php endforeach; ?>
    <?php else: ?>
        <p>Здесь товаров пока нет!</p>
    <?php endif; ?>
</div>