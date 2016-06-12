<?php defined('ISHOP') or die('Access denied'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<link rel="stylesheet" type="text/css" href="<?= TEMPLATE ?>css/style.css"/>
	<!--[if lt IE 9]>
	<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
	<![endif]-->
	<script type="text/javascript" src="<?= TEMPLATE ?>js/functions.js"></script>
	<script type="text/javascript" src="<?= TEMPLATE ?>js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="<?= TEMPLATE ?>js/jquery-ui-1.8.22.custom.min.js"></script>
	<script type="text/javascript" src="<?= TEMPLATE ?>js/jquery.cookie.js"></script>
	<script type="text/javascript" src="<?= TEMPLATE ?>js/workscripts.js"></script>
	<script type="text/javascript"> var query = '<?=$_SERVER['QUERY_STRING']?>';</script>

	<!-- Fancybox -->
	<script type="text/javascript" src="./fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
	<script type="text/javascript" src="./fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="./fancybox/jquery.fancybox-1.3.4.css" media="screen"/>
	<!-- Fancybox -->
	<title>Интернет магазин сотовых телефонов</title>
</head>

<body>
<div class="main">
	<div class="header">
		<a href="/"><img class="logo" src="<?= TEMPLATE ?>images/logo.jpg"
						 alt="Интернет магазин сотовых телефонов"/></a>
		<img class="slogan" src="<?= TEMPLATE ?>images/slogan.jpg" alt="Интернет-магазин Сотовых телефонов"/>

		<div class="head-contact">
			<p><strong>Телефон:</strong><br/>
				<span>8 (800) 700-00-01</span></p>

			<p><strong>Режим работы:</strong><br/>
				Будние дни: с 9:00 до 18:00<br/>
				Суббота, Воскресенье - выходные</p>
		</div>
		<form method="get">
			<ul class="search-head">
				<input type="hidden" name="view" value="search"/>
				<li><input type="text" name="search" id="quickquery" placeholder="Что вы хотите купить?"/></li>
				<script type="text/javascript">
					//<![CDATA[
					placeholderSetup('quickquery');
					//]]>
				</script>
				<li><input class="search-btn" type="image" src="<?= TEMPLATE ?>images/searc-btn.jpg"/></li>
			</ul>
		</form>
	</div>
	<ul class="menu">
		<li><a href="<?= PATH ?>">Главная</a></li>

		<?php if (!empty($pages)): ?>
			<?php foreach ($pages as $key => $val): ?>
				<li><a href="?view=page&amp;page_id=<?= $val['page_id'] ?>"><?= $val['title'] ?></a></li>
			<?php endforeach; ?>
		<?php endif; ?>
	</ul>