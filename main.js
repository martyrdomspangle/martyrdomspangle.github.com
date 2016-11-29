$(document).ready(function () {
    //Header
    const headerSize = $('header').outerHeight();
    let scrolled;
    let scrollPosition = 0;
    const pixelsToScroll = 10;
    const timeStamp = 150;

    var changePosition = function () {
        var st = $(this).scrollTop();
        if (Math.abs(scrollPosition - st) <= pixelsToScroll)
            return;
        if (st > scrollPosition && st > headerSize) {
            $('header').removeClass('scroll-down').addClass('scroll-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('scroll-up').addClass('scroll-down');
            }
        }
        scrollPosition = st;
    }
    $(window).scroll(function (event) {
        scrolled = true;
    });

    setInterval(function () {
        if (scrolled) {
            changePosition();
            scrolled = false;
        }
    }, timeStamp);
    //Header
});
