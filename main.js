$(document).ready(function () {
  Promise.all($('header.menu a').map((_, anchor) => {
    const pageName = $(anchor).attr('href').substring(1);

    return $.get(`/pages/${pageName}.html`).then(html => $('.stripe').append(html));
  })).then((...htmls) => htmls.forEach(html =>
    $('.stripe').append(html)
  ));

  location.hash = location.hash || 'home';
  $.get(`/pages/${location.hash.substring(1)}.html`).then(html => $('.wrapper').append(html));

  $('header.menu a').click(function(e) {
    const page = $(this).attr('href').substring(1);

    $('.wrapper').html('');
    $.get(`/pages/${page}.html`).then(html => $('.wrapper').append(html));
  });
});
