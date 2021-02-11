$(function () {
    var header = $(".IMTE_LOGO");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 155) {
                header.removeClass('IMTE_LOGO')
                        .addClass("IMTE_LOGO_CSS_TWO");
            } else {
                header.removeClass("IMTE_LOGO_CSS_TWO")
                        .addClass('IMTE_LOGO');
            }
        });
    });