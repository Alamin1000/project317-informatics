(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    event.preventDefault();
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    event.preventDefault();
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    event.preventDefault();
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });

  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  //sticky
  var wind = $(window);
  var sticky = $(".header-section");
  sticky.addClass("normal-sticky");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 300) {
      if (sticky.hasClass("sticky")) {
        setTimeout(function () {
          sticky.removeClass("temp-sticky");
          sticky.addClass("normal-sticky");
        }, 200);
      }
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
      sticky.addClass("temp-sticky");
      sticky.removeClass("normal-sticky");
    }
  });

  // owl-carousel
  $(".hero__image__slider__active").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayTimeout: 5000,
    autoHeight: true,
    touchDrag: false,
    mouseDrag: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
  });
  $(".good-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
  });
  let customerSlider = $(".customer-slider-active");
  customerSlider.owlCarousel({
    loop: false,
    margin: 50,
    responsiveClass: true,
    nav: false,
    items: 3,
    autoWidth: true,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        margin: 31,
      },
      767: {},
      1000: {},
    },
  });
  // customerSlider.on("mousewheel", ".owl-stage", function (e) {
  //   if (e.deltaY > 0) {
  //     customerSlider.trigger("next.owl");
  //   } else {
  //     customerSlider.trigger("prev.owl");
  //   }
  //   e.preventDefault();
  // });

  $(".brand-active").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);

  var footerHeight = $(".footer-section").height();
  $(".main").css("margin-bottom", +footerHeight + "px");
});
