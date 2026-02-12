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

jQuery('#js-drawer-menu a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-menu").removeClass("is-checked");
  jQuery("body").removeClass("is-fixed");
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 1000;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing", // swing or linear
  );
});
