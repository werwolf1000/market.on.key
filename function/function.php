<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 14.12.2015
 * Time: 22:20
 */
defined(ISHOP) or die('Access denied');

/* ���������� ������� */
function print_arr($arr)
{

    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}

function addtocart($goods_id)
{
    if (isset($_SESSION['cart'][$goods_id])) {
        //���� � ������� ��� ���� ����������� �����
        $_SESSION['cart'][$goods_id]['qty'] += 1;
    } else {
        //���� ����� �������� � ������� �������
        $_SESSION['cart'][$goods_id]['qty'] = 1;
    }
    return $_SESSION['cart'];
}

//�������� ����� �������
function redirect()
{
    $redirect = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : PATH;
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit;
}