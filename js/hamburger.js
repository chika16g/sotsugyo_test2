window.onunload = function() {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 806) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('.header-wrapper__menu').fadeToggle(200);
    });
  $(".header-wrapper__menu__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('.header-wrapper__menu').fadeToggle(200);
    });
  }
}); 