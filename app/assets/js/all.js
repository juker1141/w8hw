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
    $(".datepicker").toggle();
  });
  // switch ($('title').text()) {
  //   case "Index":
  //     $('.footerBannerTitle').addClass('fz32');
  //     $('.menuBtn').addClass('text-primary');
  //     $('.shopping_cartBtn').addClass('text-primary');
  //     $('.nav-link').addClass('text-dark');
  //     $('.productlistBtn').addClass('text-success');
  //     $('.pagination_firstPageBtn').addClass('text-success');
  //     break;
  //   case "Productdetail":
  //     $('.product_logo_icon').addClass('text-primary');
  //     $('.menuBtn').addClass('text-primary');
  //     $('.shopping_cartBtn').addClass('text-primary');
  //     $('.nav-link').addClass('text-dark');
  //     if (i == 'https://juker1141.github.io/w6hw/information.html') {
  //       $('.shopping-cart-page').addClass('active');
  //       $('.darkShady').show();
  //     }
  //     break;
  //   case "Information":
  //     $('.product_logo_icon').addClass('text-primary');
  //     $('.navbar').addClass('align-left');
  //     $('.l-header .col').addClass('offset-xl-1');
  //     $('.navbar-toggler').hide();
  //     $('.menuBtn span').hide();
  //     $('.shopping_cartBtn span').hide();
  //     $('.nav-link').hide();
  //     $('.l_footer').hide();
  //     break;
  //   case "Payment":
  //     $('.product_logo_icon').addClass('text-primary');
  //     $('.navbar').addClass('align-left');
  //     $('.l-header .col').addClass('offset-xl-1');
  //     $('.navbar-toggler').hide();
  //     $('.menuBtn span').hide();
  //     $('.shopping_cartBtn span').hide();
  //     $('.nav-link').hide();
  //     $('.l_footer').hide();
  //     break;
  //   case "Paydone":
  //     $('.navbar').addClass('align-left');
  //     $('.navbar-toggler').hide();
  //     $('.menuBtn span').hide();
  //     $('.shopping_cartBtn span').hide();
  //     $('.nav-link').hide();
  //     $('.l_footer').hide();
  //     break;
  // }
});

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {
  $('.datetimepicker').datepicker({
  format: "yyyy-mm-dd", //設定格式為2019-04-01
  autoclose: true,//選擇日期後就會自動關閉
  startDate: "today",//起始日期為今天
  todayHighlight: true,//今天會有一個底色
  language: 'zh-TW'//中文化
  });
});