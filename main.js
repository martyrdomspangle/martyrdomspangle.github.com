const setSize = function () {
    const headerHeight = parseFloat($('.header').css('height'));
    $('.header-section').css('height', $(window).height() - headerHeight);
};

$(document).ready(function () {
    setSize();
    const headerHeight = parseFloat($('.header').css('height'));

    //Header
    var headerSize = $('header').outerHeight();
    var scrolled;
    var scrollPosition = 0;
    var pixelsToScroll = 10;
    var timeStamp = 150;

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

$(window).resize(function () {
    setSize();
});
