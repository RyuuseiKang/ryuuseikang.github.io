$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        switch(scroll / 80) {
            case 0:
                header.addClass("scrolled");
                break;
            case 1:
                break;
            default:
                break;
        }

        if (scroll >= 80) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});