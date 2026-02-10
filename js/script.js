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
    768: {
      width: 320,
    }
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
