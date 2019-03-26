/*
function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        switch(scroll / 80) {
            case 0:
                header.addClass("scrolled");
                alert('0');
                break;
            case 1:
                alert('1');
                break;
            case 2:
                alert('2');
                break;
            default:
                break;
        }

        if (scroll >= 20) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
}

*/
window.addEventListener('scroll', function() {
    var el = document.querySelector('.show-on-scroll');

    console.log(window.scrollY / 100);

    /*
    switch(window.scrollY / 120) {
        case 0:
            //header.addClass("scrolled");
            alert('0');
            break;
        case 1:
            alert('1');
            break;
        case 2:
            alert('2');
            break;
        default:
            break;
    }

    if(window.scrollY >= 400) el.classList.add('shown');
    else el.classList.remove('shown');
    */
});