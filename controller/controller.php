<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:05
 */
defined(ISHOP) or die('Access denied');

session_start();

//����������� ������
require_once MODEL;

//����������� ���������� �������
require_once '/function/function.php';

//��������� ������� ��������
$cat = catalog();

//��������� ������� ����������
$informers = informer();

// �����������
if ($_POST['reg']) {
    registration();
}

$view = empty($_GET['view']) ? 'hits' : $_GET['view'];

switch ($view) {
    case('hits'):
        // ������ ������
        $eyestoppers = eyestopper('hits');
        break;

    case('new'):
        // �������
        $eyestoppers = eyestopper('new');
        break;

    case('sale'):
        // ����������
        $eyestoppers = eyestopper('sale');
        break;
    case('cat'):
        // ������ ���������
        $category = abs((int)$_GET['category']);
        $products = products($category); // �������� ������ �� ������
        break;
    case('addtocart'):
        $goods_id = $_GET['goods_id'];
        addtocart($goods_id);
        $_SESSION['total_sum'] = total_sum($_SESSION['cart']);

        //����������� ������ � ������� + ������ � ����� ��������������� id ������
        $_SESSION['total_quantity'] = 0;

        foreach ($_SESSION['cart'] as $key => $val) {//��������

            if (isset($val['price'])) {

                //���� �������� ���� ������ �� �� ��������� �����������
                $_SESSION['total_quantity'] += $val['qty'];
            } else {
                // ����� ������� id �� ������
                unset($_SESSION['cart'][$key]);
            }
        }
        redirect();
        break;
    case('reg'):

        break;


    default:
        // ���� �� �������� ������ �������� ��� ��������������� ����
        $view = 'hits';
        $eyestoppers = eyestopper('hits');
}
//����������� ����
require_once VIEW . TEMPLATE . 'index.php';
