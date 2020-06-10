$(document).ready(() => {
  $(".navbar_menuBtn").click(function (e) {
    e.preventDefault();
    $(".navbar_menu-active").toggleClass('active');
    $(".dropdown_menu").removeClass('active');
  });
  $(".dropdownBtn").click(function (e) {
    e.preventDefault();
    $(".dropdown_menu").toggleClass('active');
  });
  $(".checkBlockBtn").click(function (e) {
    e.preventDefault();
    $(".datepicker").toggleClass('active');
  });
  $(".destinationBlockBtn").click(function (e) {
    e.preventDefault();
    $(".destinationBlock").toggleClass('active');
  });
  $(".guestsBlockBtn").click(function (e) {
    e.preventDefault();
    $(".guestsBlock").toggleClass('active');
  });
  switch ($('title').text()) {
    case "Result":
      $('.resultLayoutHeader').addClass('loaded');
      break;
    case "Productdetail":
      $('.product_logo_icon').addClass('text-primary');
      $('.menuBtn').addClass('text-primary');
      $('.shopping_cartBtn').addClass('text-primary');
      $('.nav-link').addClass('text-dark');
      if (i == 'https://juker1141.github.io/w6hw/information.html') {
        $('.shopping-cart-page').addClass('active');
        $('.darkShady').show();
      }
      break;
    case "Information":
      $('.product_logo_icon').addClass('text-primary');
      $('.navbar').addClass('align-left');
      $('.l-header .col').addClass('offset-xl-1');
      $('.navbar-toggler').hide();
      $('.menuBtn span').hide();
      $('.shopping_cartBtn span').hide();
      $('.nav-link').hide();
      $('.l_footer').hide();
      break;
    case "Payment":
      $('.product_logo_icon').addClass('text-primary');
      $('.navbar').addClass('align-left');
      $('.l-header .col').addClass('offset-xl-1');
      $('.navbar-toggler').hide();
      $('.menuBtn span').hide();
      $('.shopping_cartBtn span').hide();
      $('.nav-link').hide();
      $('.l_footer').hide();
      break;
    case "Paydone":
      $('.navbar').addClass('align-left');
      $('.navbar-toggler').hide();
      $('.menuBtn span').hide();
      $('.shopping_cartBtn span').hide();
      $('.nav-link').hide();
      $('.l_footer').hide();
      break;
  }
});

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
