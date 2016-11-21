const setSize = function() {
  const headerHeight = parseFloat($('.header').css('height'));
  $('.header-section').css('height', $(window).height() - headerHeight);
};

let prevScrollPosition = $(window).scrollTop();
let direction = true;

$(document).ready(function() {
  setSize();
  const headerHeight = parseFloat($('.header').css('height'));

  $(window).scroll(function() {
    const currScroll = $(window).scrollTop();

    if (currScroll < headerHeight) return;

    if (currScroll > prevScrollPosition && !direction) {
      direction = true;
      $('.header').hide("slide", {direction: "top" }, "slow");
    } else 
    if (currScroll < prevScrollPosition && direction) {
      direction = false;
      $('.header').hide();
      $('.content').css('margin-top', $('.header').css('height'));
      $('.header').css('position', 'fixed');
      $('.header').css('top', '0');
      $('.header').hide("slide", {direction: "bottom" }, "slow");
    }

    prevScrollPosition = currScroll;
  });
});

$(window).resize(function() {
  setSize();
});
