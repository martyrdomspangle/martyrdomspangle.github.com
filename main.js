const setSize = function() {
  const headerHeight = parseFloat($('.header').css('height'));
  $('.header-section').css('height', $(window).height() - headerHeight);
};

$(document).ready(function() {
  setSize();
});

$(window).resize(function() {
  setSize();
});