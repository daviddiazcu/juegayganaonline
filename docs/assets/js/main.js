(function ($) {
  "use strict";

  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });

  new WOW().init();
})(jQuery);
