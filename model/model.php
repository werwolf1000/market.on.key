<?php

defined('ISHOP') or die('Access denied');

/* ====Каталог - получение массива=== */
function catalog()
{
    $query = "SELECT * FROM brands ORDER BY parent_id, brand_name";
    $res = mysql_query($query) or die(mysql_query());

    //массив категорий
    $cat = array();
    while ($row = mysql_fetch_assoc($res)) {
        if (!$row['parent_id']) {
            $cat[$row['brand_id']][] = $row['brand_name'];
        } else {
            $cat[$row['parent_id']]['sub'][$row['brand_id']] = $row['brand_name'];
        }
    }
    return $cat;
}

/* ====Каталог - получение массива=== */

/* ===Информеры - получение массива=== */
function informer()
{
    $query = "SELECT * FROM links
                INNER JOIN informers ON
                    links.parent_informer = informers.informer_id
                        ORDER BY informer_position, links_position";
    $res = mysql_query($query) or die(mysql_query());

    $informers = array();
    $name = ''; // флаг имени информера
    while ($row = mysql_fetch_assoc($res)) {
        if ($row['informer_name'] != $name) { // если такого информера в массиве еще нет
            $informers[$row['informer_id']][] = $row['informer_name']; // добавляем информер в массив
            $name = $row['informer_name'];
        }
        $informers[$row['parent_informer']]['sub'][$row['link_id']] = $row['link_name']; // заносим страницы в информер
    }
    return $informers;
}

/* ===Информеры - получение массива=== */

/* ===Айстопперы - новинки, лидеры продаж, распродажа=== */
function eyestopper($eyestopper)
{
    $query = "SELECT goods_id, name, img, price FROM goods
                WHERE visible='1' AND $eyestopper='1'";
    $res = mysql_query($query) or die(mysql_error());

    $eyestoppers = array();
    while ($row = mysql_fetch_assoc($res)) {
        $eyestoppers[] = $row;
    }

    return $eyestoppers;
}

/* ===Айстопперы - новинки, лидеры продаж, распродажа=== */

/* Получение колличество товаров для навигации*/
function count_rows($category)
{
    $query = "(SELECT COUNT(goods_id) as count_rows
                 FROM goods
                     WHERE goods_brandid = $category AND visible='1')
               UNION
               (SELECT COUNT(goods_id) as count_rows
                 FROM goods
                     WHERE goods_brandid IN
                (
                    SELECT brand_id FROM brands WHERE parent_id = $category
                ) AND visible='1')";
    $res = mysql_query($query) or die(mysql_error());
    $count_rows = null;
    while ($row = mysql_fetch_assoc($res)) {
        if ($row['count_rows']) $count_rows = $row['count_rows'];
    }
    return $count_rows;
}

/* ===Получение массива товаров по категории=== */
function products($category, $start_pos = 1, $per_page)
{
    $query = "(SELECT goods_id, name, img, anons, price, hits, new, sale
                 FROM goods
                     WHERE goods_brandid = $category AND visible='1')
               UNION      
               (SELECT goods_id, name, img, anons, price, hits, new, sale
                 FROM goods 
                     WHERE goods_brandid IN 
                (
                    SELECT brand_id FROM brands WHERE parent_id = $category
                ) AND visible='1') LIMIT $start_pos, $per_page";

    $res = mysql_query($query) or die(mysql_error());
    $res = mysql_query($query) or die(mysql_error());

    $products = array();
    while ($row = mysql_fetch_assoc($res)) {
        $products[] = $row;
    }

    return $products;
}

/* ===Получение массива товаров по категории=== */

/* ===Сумма заказа в корзине + атрибуты товара===*/
function total_sum($goods)
{
    $total_sum = 0;

    $str_goods = implode(',', array_keys($goods));

    $query = "SELECT goods_id, name, price
                FROM goods
                    WHERE goods_id IN ($str_goods)";
    $res = mysql_query($query) or die(mysql_error());

    while ($row = mysql_fetch_assoc($res)) {
        $_SESSION['cart'][$row['goods_id']]['name'] = $row['name'];
        $_SESSION['cart'][$row['goods_id']]['price'] = $row['price'];
        $total_sum += $_SESSION['cart'][$row['goods_id']]['qty'] * $row['price'];
    }
    return $total_sum;
}

/* ===Сумма заказа в корзине + атрибуты товара===*/

/* ===Регистрация=== */
function registration()
{
    $error = ''; // флаг проверки пустых полей

    $login = mysql_real_escape_string(trim(strip_tags($_POST['login'])));
    $pass = trim(strip_tags($_POST['pass']));
    $name = mysql_real_escape_string(trim(strip_tags($_POST['name'])));
    $email = mysql_real_escape_string(trim(strip_tags($_POST['email'])));
    $phone = mysql_real_escape_string(trim(strip_tags($_POST['phone'])));
    $address = mysql_real_escape_string(trim(strip_tags($_POST['address'])));

    if (empty($login)) $error .= '<li>Не указан логин</li>';
    if (empty($pass)) $error .= '<li>Не указан пароль</li>';
    if (empty($name)) $error .= '<li>Не указано ФИО</li>';
    if (empty($email)) $error .= '<li>Не указан Email</li>';
    if (empty($phone)) $error .= '<li>Не указан телефон</li>';
    if (empty($address)) $error .= '<li>Не указан адрес</li>';

    if (empty($error)) {
        // если все поля заполнены
        // проверяем нет ли такого юзера в БД
        $query = "SELECT customer_id FROM customers WHERE login = '$login' LIMIT 1";
        $res = mysql_query($query) or die(mysql_error());
        $row = mysql_num_rows($res); // 1 - такой юзер есть, 0 - нет
        if ($row) {
            // если такой логин уже есть
            $_SESSION['reg']['res'] = "<div class='error'>Пользователь с таким логином уже зарегистрирован на сайте. Введите другой логин.</div>";
            $_SESSION['reg']['name'] = $name;
            $_SESSION['reg']['email'] = $email;
            $_SESSION['reg']['phone'] = $phone;
            $_SESSION['reg']['addres'] = $address;
        } else {
            // если все ок - регистрируем
            $pass = md5($pass);
            $query = "INSERT INTO customers (name, email, phone, address, login, password)
                        VALUES ('$name', '$email', '$phone', '$address', '$login', '$pass')";
            $res = mysql_query($query) or die(mysql_error());
            if (mysql_affected_rows() > 0) {
                // если запись добавлена
                $_SESSION['reg']['res'] = "<div class='success'>Регистрация прошла успешно.</div>";
                $_SESSION['auth']['user'] = $name;
                $_SESSION['auth']['email'] = $email;
                $_SESSION['auth']['customer_id'] = mysql_insert_id();
            }
        }
    } else {
        // если не заполнены обязательные поля
        $_SESSION['reg']['res'] = "<div class='error'>Не заполнены обязательные поля: <ul> $error </ul></div>";
        $_SESSION['reg']['login'] = $login;
        $_SESSION['reg']['name'] = $name;
        $_SESSION['reg']['email'] = $email;
        $_SESSION['reg']['phone'] = $phone;
        $_SESSION['reg']['addres'] = $address;
    }
}

/* ===Регистрация=== */

/* ===Авторизация=== */
function authorization()
{
    $login = mysql_real_escape_string(trim($_POST['login']));
    $pass = trim($_POST['pass']);

    if (empty($login) OR empty($pass)) {
        // если пусты поля логин/пароль
        $_SESSION['auth']['error'] = "<div class='error'>Поля логин/пароль должны быть заполнены!</div>";
    } else {
        // если получены данные из полей логин/пароль
        $pass = md5($pass);

        $query = "SELECT customer_id,name, email FROM customers WHERE login = '$login' AND password = '$pass' LIMIT 1";
        $res = mysql_query($query) or die(mysql_error());
        if (mysql_num_rows($res) == 1) {
            // если авторизация успешна
            $row = mysql_fetch_row($res);

            $_SESSION['auth']['customer_id'] = $row[0];
            $_SESSION['auth']['user'] = $row[1];
            $_SESSION['auth']['email'] = $row[2];
        } else {
            // если неверен логин/пароль
            $_SESSION['auth']['error'] = "<div class='error'>Логин/пароль введены неверно!</div>";
        }
    }
}

/* ===Авторизация=== */

/* Способы доставки */
function get_dostavka()
{
    $query = "SELECT * FROM dostavka";
    $res = mysql_query($query);

    $dostavka = array();
    while ($row = mysql_fetch_assoc($res)) {
        $dostavka[] = $row;
    }

    return $dostavka;
}

/* Способы доставки */

/* ===Добавление заказа=== */
function add_order()
{
    // получаем общие данные для всех (авторизованные и не очень)
    $dostavka_id = (int)$_POST['dostavka'];
    if (!$dostavka_id) $dostavka_id = 1;
    $prim = clear($_POST['prim']);
    if ($_SESSION['auth']['user']) $customer_id = $_SESSION['auth']['customer_id'];

    if (!$_SESSION['auth']['user']) {
        $error = ''; // флаг проверки пустых полей

        $name = clear($_POST['name']);
        $email = clear($_POST['email']);
        $phone = clear($_POST['phone']);
        $address = clear($_POST['address']);

        if (empty($name)) $error .= '<li>Не указано ФИО</li>';
        if (empty($email)) $error .= '<li>Не указан Email</li>';
        if (empty($phone)) $error .= '<li>Не указан телефон</li>';
        if (empty($address)) $error .= '<li>Не указан адрес</li>';

        if (empty($error)) {
            // добавляем гостя в заказчики (но без данных авторизации)
            $customer_id = add_customer($name, $email, $phone, $address);
            if (!$customer_id) return false; // прекращаем выполнение в случае возникновения ошибки добавления гостя-заказчика
        } else {
            // если не заполнены обязательные поля
            $_SESSION['order']['res'] = "<div class='error'>Не заполнены обязательные поля: <ul> $error </ul></div>";
            $_SESSION['order']['name'] = $name;
            $_SESSION['order']['email'] = $email;
            $_SESSION['order']['phone'] = $phone;
            $_SESSION['order']['addres'] = $address;
            $_SESSION['order']['prim'] = $address;
            return false;
        }
        $_SESSION['order']['email'] = $email;
    }


    save_order($customer_id, $dostavka_id, $prim);
}

/* ===Добавление заказа=== */

/* ===Добавление заказчика-гостя=== */
function add_customer($name, $email, $phone, $address)
{

    $query = "INSERT INTO customers (name, email, phone, address)
                VALUES ('$name', '$email', '$phone', '$address')";
    $res = mysql_query($query);
    if (mysql_affected_rows() > 0) {
        // если гость добавлен в заказчики - получаем его ID
        return mysql_insert_id();
    } else {
        // если произошла ошибка при добавлении
        $_SESSION['order']['res'] = "<div class='error'>Произошла ошибка при регистрации заказа</div>";
        $_SESSION['order']['name'] = $name;
        $_SESSION['order']['email'] = $email;
        $_SESSION['order']['phone'] = $phone;
        $_SESSION['order']['addres'] = $address;
        $_SESSION['order']['prim'] = $address;
        return false;
    }

}

/* ===Добавление заказчика-гостя=== */

/* ===Сохранение заказа=== */
function save_order($customer_id, $dostavka_id, $prim)
{
    $query = "INSERT INTO orders (`customer_id`, `date`, `dostavka_id`, `prim`)
                VALUES ($customer_id, NOW(), $dostavka_id, '$prim')";
    mysql_query($query) or die(mysql_error());
    if (mysql_affected_rows() == -1) {
        // если не получилось сохранить заказ - удаляем заказчика
        mysql_query("DELETE FROM customers
                        WHERE customer_id = $customer_id AND login = ''");
        return false;
    }
    $order_id = mysql_insert_id(); // ID сохраненного заказа
    $val = '';
    if (empty($_SESSION['cart'])) {
        return false;
    }
    foreach ($_SESSION['cart'] as $goods_id => $value) {
        $val .= "($order_id, $goods_id, {$value['qty']}),";
    }
    $val = substr($val, 0, -1); // удаляем последнюю запятую

    $query = "INSERT INTO zakaz_tovar (orders_id, goods_id, quantity)
                VALUES $val";
    mysql_query($query) or die(mysql_error());
    if (mysql_affected_rows() == -1) {
        // если не выгрузился заказа - удаляем заказчика (customers) и заказ (orders)
        mysql_query("DELETE FROM orders WHERE order_id = $order_id");
        mysql_query("DELETE FROM customers
                        WHERE customer_id = $customer_id AND login = ''");
        return false;
    }
    if (isset($_SESSION['auth']['email'])) {
        $email = $_SESSION['auth']['email'];
    } else {
        $email = $_SESSION['order']['email'];

    }

    mail_order($order_id, $email);
    // если заказ выгрузился

    unset($_SESSION['cart']);
    unset($_SESSION['total_sum']);
    unset($_SESSION['total_quantity']);
    $_SESSION['order']['res'] = "<div class='success'>Спасибо за Ваш заказ. В ближайшее время с Вами свяжется менеджер для согласования заказа.</div>";
    return true;
}

/* ===Сохранение заказа=== */

/* Отправка уведомлений  о заказе на email */
function mail_order($order_id, $email)
{
    $to = $email;
    $subject = "Заказ в интернет магазине";
    $headers = "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: ISHOP";
    $body = "Благодарим вас за ваш заказ\r\n";
    $body .= "Номер вашегозаказа $order_id \r\n";
    $body .= "Заказанные товары:\r\n";
    foreach ($_SESSION['cart'] as $key => $val) {
        $body .= "$key => " . $val['name'] . ",цена: " . $val['price'] . " , колличество:" . $val['qty'] . "\r\n\r\n";
    }
    $body .= "Итого: " . $_SESSION['total_sum'] . "руб";
    mail($to, $subject, $body, $headers);
}

/* Отправка уведомлений  о заказе на email */


/* ===Поиск=== */
function search($page, $search_total)
{
    $search = clear($_GET['search']);
    $result_search = array(); //результат поиска
    $perpage = ($page - 1) * PERPAGE;

    if (mb_strlen($search, 'UTF-8') < 4) {
        $result_search['notfound'] = "<div class='error'>Поисковый запрос должен содержать не менее 4-х символов</div>";
    } else {
        $query = "SELECT goods_id, name, img, price, hits, new, sale
                    FROM goods
                        WHERE MATCH(name) AGAINST('{$search}*' IN BOOLEAN MODE) AND visible='1' LIMIT $perpage," . PERPAGE;
        $res = mysql_query($query) or die(mysql_error());

        if (mysql_num_rows($res) > 0) {
            while ($row_search = mysql_fetch_assoc($res)) {
                $result_search[] = $row_search;
            }
        } else {
            $result_search['notfound'] = "<div class='error'>По Вашему запросу ничего не найдено</div>";
        }
    }

    return $result_search;
}


/* ===Поиск=== */


function search_total_rows()
{
    $search = $_GET['search'];
    $sql = "SELECT count(*) as total_rows
                    FROM goods
                        WHERE MATCH(name) AGAINST('{$search}*' IN BOOLEAN MODE) AND visible='1'";
    $result = mysql_query($sql);
    $count = '';
    while ($row = mysql_fetch_assoc($result)) {
        $count = $row['total_rows'];
    }
    return $count;
}


/* ===Выбор по параметрам=== */
function filter($category, $startprice, $endprice)
{

}
/* ===Выбор по параметрам=== */