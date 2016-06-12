<?php defined('ISHOP') or die('Access denied'); ?>
<div class="content">
    <?php //print_arr($pages) ?>
    <h2>Список страниц</h2>
    <?php
    if (isset($_SESSION['answer'])) {
        echo $_SESSION['answer'];
        unset($_SESSION['answer']);
    }
    ?>

    <a href="?view=add_news"><img class="add_some" src="<?= ADMIN_TEMPLATE ?>images/add_page.jpg"
                                  alt="добавить страницу"/></a>
    <table class="tabl" cellspacing="1">
        <tr>
            <th class="number">№</th>
            <th class="str_name">Название страницы</th>
            <th class="str_sort">Дата</th>
            <th class="str_action">Действие</th>
        </tr>
        <?php $i = 1; ?>
        <?php foreach ($all_news as $key => $new): ?>
            <tr>
                <td><?= $key + 1 ?></td>
                <td><?= $new['title'] ?></td>
                <td><?= $new['date'] ?></td>
                <td><a href="?view=edit_news&amp;news_id=<?= $new['news_id'] ?>">изменить</a> | <a class="del"
                                                                                                   href="?view=del_news&amp;news_id=<?= $new['news_id'] ?>">удалить</a>
                </td>
            </tr>
        <?php endforeach; ?>

    </table>
    <a href="?view=add_page"><img class="add_some" src="<?= ADMIN_TEMPLATE ?>images/add_page.jpg"
                                  alt="добавить страницу"/></a>

    <?php if ($pages_count > 1) pagination($page, $pages_count); ?>
</div> <!-- .content -->
</div> <!-- .content-main -->
</div> <!-- .karkas -->
</body>
</html>