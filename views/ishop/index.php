<?php
defined(ISHOP) or die('Access denied');
?>
<?php
include_once 'inc/header.php';


?>


    <div id="contentwrapper">
        <div id="content">
            <?php include_once $view . '.php' ?>
            <!--             -->
        </div>
    </div>

<?php
require_once 'inc/leftbar.php';
require_once 'inc/rightbar.php';
?>

    <div class="clr"></div>
<?php
require_once 'inc/footer.php';
?>

</div>
<script type="text/javascript">
    //<![CDATA[
    placeholderSetup('quickquery');
    //]]>
</script>
</body>
</html>
