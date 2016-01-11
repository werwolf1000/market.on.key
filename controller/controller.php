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
    redirect();
}
if ($_GET['do'] == 'logout') {
    logout();
    redirect();
}

if ($_POST['auth']) {

    authorization();
    redirect();
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

        //��������� ��� ���������
        $perpage = PERPAGE; //���-�� ������� �� ��������
        if (isset($_GET['page'])) {
            $page = ((abs((int)$_GET['page'])) == 0) ? 1 : (abs((int)$_GET['page']));

        } else {
            $page = 1;
        }

        $count_rows = count_rows($category);
        $page_count = ceil($count_rows / $perpage);
        if (!$page_count) {
            $page_count = 1;//������� ���� ��������
        }
        /*  if($page > $page_count){
              $page = $page_count;//���� ���������� �������� ������ ���������
          }*/
        $start_pos = ($page - 1) * $perpage;
        $products = products($category, $start_pos, $perpage); // �������� ������ �� ������
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
    case('cart'):
        // �������� ������� � �������
        if (isset($_GET['id'], $_GET['qty'])) {

            $goods_id = abs((int)$_GET['id']);
            $qty = abs((int)$_GET['qty']);

            //$qty = $qty - $_SESSION['cart'][$goods_id]['qty'];

            addtocart($goods_id, $qty);

            $_SESSION['total_sum'] = total_sum($_SESSION['cart']); // ����� ������

            total_quantity(); // ���-�� ������ � ������� + ������ �� ����� ��������������� ID ������
            redirect();
        }
        /* ===�������� �� �������=== */

        if (isset($_GET['delete'])) {
            $id = abs((int)$_GET['delete']);
            if ($id) {
                delete_from_cart($id);
            }
            redirect();
        }
        /* ��������� �������� ��������*/
        $dostavka = get_dostavka();
        if ($_POST['order_x']) {
            add_order();
            redirect();

        }
        break;

    case('search'):
        //�����
        $search_total = search_total_rows();
        if (isset($_GET['page'])) {
            $page = $_GET['page'];
        } else {
            $page = 1;
        }
        $result_search = search($page, $search_total);
        break;

    case('filter'):
        // ����� �� ����������
        $startprice = (int)$_GET['startprice'];
        $endprice = (int)$_GET['endprice'];
        $brand = array();

        if ($_GET['brand']) {
            foreach ($_GET['brand'] as $value) {
                $value = (int)$value;
                $brand[$value] = $value;
            }
        }
        if ($brand) {
            $category = implode(',', $brand);
        }
        $products = filter($category, $startprice, $endprice);
        break;
    default:
        // ���� �� �������� ������ �������� ��� ��������������� ����
        $view = 'hits';
        $eyestoppers = eyestopper('hits');
}
//����������� ����
require_once VIEW . TEMPLATE . 'index.php';
