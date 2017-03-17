$(document).ready(function () {
  var menu = $('header.menu a');
  Promise.all(menu.map(function(_, anchor) {
    const pageName = $(anchor).attr('href').substring(1);

    return $.get('/pages/' + pageName + '.html').then(function(html) { $('.wrapper').append(html); });
  })).then(function(r) {
    location.hash = location.hash || 'home';
    setActive.call($('a[href="' + location.hash + '"]').first().get(), null, location.hash);
    menu.click(setActive);
  });

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

  setInterval(swapImages, 2e3);
});

function setActive(e, id) {
  $('header.menu a').each(function () {
    $(this).removeClass('selected');
  });

  $(this).addClass('selected');

  // hide all
  $('.wrapper > section').each(function () {
    $(this).hide();
  });

  // show current
  var page = id || $(this).attr('href');
  $(page).show();
};

function swapImages() {
  $('.media-slide').each(function () {
    $active = $(this).children('.active-img');
    var $next = $active.next();
    if ($next.length === 0) {
      $next = $(this).children(':first');
    }
    $active.removeClass('active-img')
    $next.addClass('active-img')
  });
};
