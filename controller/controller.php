<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 13.12.2015
 * Time: 21:05
 */
defined(ISHOP) or die('Access denied');

//����������� ������
require_once MODEL;

//����������� ���������� �������
require_once '/function/function.php';

//��������� ������� ��������
$cat = catalog();

//��������� ������� ����������
$informers = informer();

$view = empty($_GET['view']) ? 'hits' : $_GET['view'];

catalog();
//����������� ����
require_once VIEW . TEMPLATE . 'index.php';