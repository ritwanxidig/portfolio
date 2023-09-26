$(document).ready(function () {
  $(window).on('load', function()
  {
    $('.preloader').addClass('complete');
    console.log('loaded');
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    strings: ["Developer", "Designer", "Specialist", "Project Manager"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  var waypoint = new Waypoint({
    element: document.getElementById("exprience"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:100%; transition:1s all;");
      p[1].setAttribute("style", "width:96%; transition:1.5s all;");
      p[2].setAttribute("style", "width:90%; transition:1.7s all;");
      p[3].setAttribute("style", "width:85%; transition:1.9s all;");
      p[4].setAttribute("style", "width:80%; transition:2s all;");
    },
    offset:'90%',
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    autoplayTimeout: 3500,
    autoplayHoverPause: true
  });

  var filterizd = $('.filter-container').filterizr({
    animationDuration: .5,
  });
});
