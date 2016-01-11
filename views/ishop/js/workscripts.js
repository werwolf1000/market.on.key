$(document).ready(function () {

    /* ===Аккордеон=== */
    var openItem = false;
    if (jQuery.cookie("openItem") && jQuery.cookie("openItem") != 'false') {
        openItem = parseInt(jQuery.cookie("openItem"));
    }
    jQuery("#accordion").accordion({
        active: openItem,
        collapsible: true,
        autoHeight: false,
        header: 'h3'
    });
    jQuery("#accordion h3").click(function () {
        jQuery.cookie("openItem", jQuery("#accordion").accordion("option", "active"));
    });
    jQuery("#accordion > li").click(function () {
        jQuery.cookie("openItem", null);
        var link = jQuery(this).find('a').attr('href');
        window.location = link;
    });
    /* ===Аккордеон=== */


    /* Авторизация */
    $('#auth').live('click', function (e) {
        e.preventDefault();
        var login = $("#login").val();
        var pass = $("#pass").val();
        var auth = $("#auth").val();

        $.ajax({
            url: './',
            type: 'POST',
            data: {auth: auth, login: login, pass: pass},
            success: function (res) {
                res = $(res).find('.authform');
                $(".authform").hide().fadeIn(500).html(res);
                $('.notauth').fadeIn(500).remove();
            },
            error: function () {
                alert("Error!");
            }
        });

    });
    /* ===Клавиша ENTER при пересчете=== */
    $(".kolvo").keypress(function (e) {
        if (e.which == 13) {
            return false;
        }
    });
    /* ===Клавиша ENTER при пересчете=== */

    /* ===Пересчет товаров в корзине=== */
    $(".kolvo").each(function () {
        var qty_start = $(this).val(); // кол-во до изменения

        $(this).change(function () {
            var qty = $(this).val(); // кол-во перед пересчетом
            var res = confirm("Пересчитать корзину?");
            if (res) {

                var id = $(this).attr("id");
                id = id.substr(2);
                console.log()
                if (!parseInt(qty)) {
                    qty = qty_start;

                }
                // передаем параметры
                window.location = "?view=cart&qty=" + qty + "&id=" + id;
            } else {
                // если отменен пересчет корзины
                $(this).val(qty_start);
            }
        });
    });

});



