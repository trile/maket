AOS.init();

$(".nav__hamburger").click(function () {
  $(".nav__menu").toggleClass("expanded");
});

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 125,
  loop: true
});