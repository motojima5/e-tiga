$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-menu").toggleClass("is-checked");
  $("body").toggleClass("is-fixed");
});

const swiper = new Swiper("#js-case-study-swiper", {
  // Optional parameters
  // バグるためコメントアウト
  // loop: true,
  spaceBetween: 18,
  width: 360,

  breakpoints: {
    1024: {
      width: 320,
    },
  },

  // If we need pagination
  pagination: {
    el: "#js-case-study-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-case-study-next",
    prevEl: "#js-case-study-prev",
  },
});

jQuery('#contents > div[id != "tab1"]').hide();
jQuery(".company__tab a").on("click", function () {
  jQuery("#contents > div").hide();
  jQuery(jQuery(this).attr("href")).show();
  jQuery(".current").removeClass("current");
  jQuery(this).addClass("current");
  return false;
});
