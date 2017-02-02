$(document).ready(function () {
  var menu = $('header.menu a');
  Promise.all(menu.map((_, anchor) => {
    const pageName = $(anchor).attr('href').substring(1);

    return $.get(`/pages/${pageName}.html`).then(html => $('.wrapper').append(html));
  })).then(r => {
    location.hash = location.hash || 'home';
    setActive.call($('a[href="' + location.hash +'"]').first().get(), null, location.hash);
    menu.click(setActive);
  });

   setInterval(swapImages, 2e3);
});

function setActive(e, id) {
  
  console.log(this);

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
  console.log(page);
  $(page).show();
};

function swapImages() {
        $('.media-slide').each(function() {
          $active = $(this).children('.active-img');
          var $next = $active.next();
          if($next.length === 0) {
              $next = $(this).children(':first');
          }
          $active.removeClass('active-img')
          $next.addClass('active-img')
      });
  };