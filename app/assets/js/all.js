$(document).ready(() => {
  //layout
  $(".navbar_menuBtn").click(function (e) {
    e.preventDefault();
    $(".navbar_menu-active").toggleClass('active');
    $(".dropdown_menu").removeClass('active');
  });
  $(".dropdownBtn").click(function (e) {
    e.preventDefault();
    $(".dropdown_menu").toggleClass('active');
  });

  //index
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

  //result
  $(".sortBtn").click(function (e) {
    e.preventDefault();
    $(".sortList").toggleClass('active');
  });
  $(".filterBlockShowBtn").click(function (e) {
    e.preventDefault();
    $(".filterBlock").toggleClass('active');
    $(".filterBlock").toggleClass('zIndexMax');
  });
  $(".filterBlockCloseBtn").click(function (e) {
    e.preventDefault();
    $(".filterBlock").toggleClass('active');
    $(".filterBlock").toggleClass('zIndexMax');
  });
  $(".filterBlockDoneBtn").click(function (e) {
    e.preventDefault();
    $(".filterBlock").toggleClass('active');
    $(".filterBlock").toggleClass('zIndexMax');
  });

  //roomdetail
  $(".roomTypeBtn").click(function (e) {
    e.preventDefault();
    $(".orderBlock").toggleClass('active');
  });
  $(".orderBtn_cancelBtn").click(function (e) {
    e.preventDefault();
    $(".orderBlock").toggleClass('active');
  });

  //reserve
  $(".reserveDetailListBtn").click(function (e) {
    e.preventDefault();
    $(".reserveDetailList").toggleClass('active');
    $(".reserveDetailListHeadPrice").toggleClass('active');
    $(".expandMoreBtn").toggleClass('active');
    $(".expandLessBtn").toggleClass('active');
    $(".reserveDetailListHead").toggleClass('justify-content-between');
    $(".reserveDetailListHead").toggleClass('justify-content-end');
  });


  //更改不同頁面的layout
  switch ($('title').text()) {
    case "Result":
      $('.resultLayoutHeader').addClass('loaded');
      $('.py_92').addClass('py-4');
      $('.footerBanner').addClass('flex-md-row');
      $('.footerBannerTitle').addClass('resultPageBannerTitle');
      $('.btn-group').addClass('resultPageBannerBtn-group');
      $('.emailSubscribeInput').addClass('resultPageBannerInput');
      break;
    case "RoomDetail":
      $('.resultLayoutHeader').addClass('loaded');
      $('.py_92').addClass('py-4');
      $('.footerBanner').addClass('flex-md-row');
      $('.footerBannerTitle').addClass('resultPageBannerTitle');
      $('.btn-group').addClass('resultPageBannerBtn-group');
      $('.emailSubscribeInput').addClass('resultPageBannerInput');
      break;
    case "Reserve":
      $('.reservePageHide').hide();
      $(".jumbotron").hide();
      $('.reservePageCol').addClass('col-xl-8');
      $('.reservePageCol').addClass('offset-xl-2');
      $('.reservePageCol').removeClass('justify-content-md-between');
      break;
    case "Reserve_success":
      $('.reservePageHide').hide();
      $(".jumbotron").hide();
      $('.reservePageCol').addClass('col-xl-8');
      $('.reservePageCol').addClass('offset-xl-2');
      $('.reservePageCol').removeClass('justify-content-md-between');
      break;
    case "Login":
      $('.loginPageHide').addClass('d_none');
      break;
    case "Member":
      $('.memberPageHide').addClass('d_none');
      $('.memberPageShow').addClass('d-flex');
      $(".jumbotron").hide();
      break;
  }
});


//swiper預設
const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
