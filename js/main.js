$(document).ready(function () {
  var menu = $('header.menu a');

  var sectionsPath = {
    home: '.section-home',
    about: '.section-about-us',
    team: '.section-team',
    work: '.section-our-work',
    hire: '.section-hire-us'
  };

 /* Promise.all(menu.map(function(_, anchor) {
    const pageName = $(anchor).attr('href').substring(1);
    return $.get('/pages/' + pageName + '.html', function(html){
      $(sectionsPath[pageName]).append(html);
    })
  })).then(function(r) {
    location.hash = location.hash || 'home';
    setActive.call($('a[href="' + location.hash + '"]').first().get(), null, location.hash);
    menu.click(setActive);
  });*/
  //////

  //$.get('/pages' + pageName + '.html').done(function(html){
    //$(sectionsPath[pageName]).append(html);
  //});

  function requestDeferredPages(namesArray){
    var deferredPages = [];
    $.each(namesArray, function(index, value){
      deferredPages.push(
        $.get('/pages/' + value + '.html').done(function(html){
          $(sectionsPath[value]).append(html);
        })
        );
    });
    return deferredPages;
  };

  var hrefNames = [];

  $.map(menu, function(anchor){
    var pageName = $(anchor).attr('href').substring(1);
    hrefNames.push(pageName);
  });

  var deferredHTMLData = requestDeferredPages(hrefNames);
  $.when.apply(null, deferredHTMLData).done(function(r){
    alert('done!');
    location.hash = location.hash || 'home';
    setActive.call($('a[href="' + location.hash + '"]').first().get(), null, location.hash);
    menu.click(setActive);
  });

  //////
    $('body').on('click', 'a[href*="#"]:not([href="#"])', function() {
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

  $('.wrapper').on('click', '.desc-more', function(event){
    event.preventDefault();
    $(this).closest('.owl-item').addClass('full-desc-visible');
    return false;
  });

  setInterval(swapImages, 2e3);
});

function setActive(e, id) {
  $('header.menu a').each(function () {
    $(this).removeClass('selected');
  });

  $(this).addClass('selected');

  // hide all
  $('.wrapper section').each(function () {
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
