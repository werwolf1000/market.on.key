$(document).ready(function () {

    // акордеон категорий
    $(".acordeon").accordion({
        header: 'li.header_li',
        autoHeight: false,
        collapsible: true,
        active: false
    });
    // акордеон категорий

    /* Удаление  */
    $('.del').click(function () {
        var res = confirm("Подтвердите удаление");
        if (!res) {
            return false;
        }
    });
    /* Удаление  */
    // слайд информеров
    $(".toggle").click(function () {
        $(this).parent().next().slideToggle(500);

        if ($(this).parent().attr("class") == "inf-down") {
            $(this).parent().removeClass("inf-down");
            $(this).parent().addClass("inf-up");
        } else {
            $(this).parent().removeClass("inf-up");
            $(this).parent().addClass("inf-down");
        }
    });
    // слайд информеров

    // поля картинок галереи
    var max = 5;
    var min = 1;
    $("#del").attr("disabled", true);
    $("#add").click(function () {
        var total = $("input[name='galleryimg[]']").length;
        if (total < max) {
            $("#btnimg").append('<div><input type="file" name="galleryimg[]" /></div>');
            if (max == total + 1) {
                $("#add").attr("disabled", true);
            }
            $("#del").removeAttr("disabled");
        }
    });
    $("#del").click(function () {
        var total = $("input[name='galleryimg[]']").length;
        if (total > min) {
            $("#btnimg div:last-child").remove();
            if (min == total - 1) {
                $("#del").attr("disabled", true);
            }
            $("#add").removeAttr("disabled");
        }
    });
    // поля картинок галереи
});
