$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-menu").toggleClass("is-checked");
  $("body").toggleClass("is-fixed");
});
