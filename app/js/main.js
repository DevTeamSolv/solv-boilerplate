(function ($) {
    "use strict";

    /*----------------------------
     jQuery Slickmenu
    ------------------------------ */
    $('#menu').slicknav();
    /*----------------------------
     jQuery Stickymenu
    ------------------------------ */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.sticky-header').addClass("sticky");
        }
        else {
            $('.sticky-header').removeClass("sticky");
        }
    });
    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();
    /*----------------------------
     owl active
    ------------------------------ */
    $(".owl-demo").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 4,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
      });

      $(".owl-partners").owlCarousel({
          autoPlay: true,
          slideSpeed: 2000,
          pagination: true,
          navigation: false,
          items: 4,
          itemsDesktop: [1199, 2],
          itemsDesktopSmall: [980, 2],
          itemsTablet: [768, 1],
          itemsMobile: [479, 1]
        });
    /*----------------------------
     type active
    ------------------------------ */
    $(function () {
        $(".element").typed({
            strings: ["SOLUTIONTOKEN"],
            typeSpeed: 150,
            loop: true
        });
    });
    /*----------------------------
     Smooth Scrool
    ------------------------------ */

    $('ul#menu > li > a').on('click', function (event) {
        var $anchor = $($(this).attr('href')).offset().top - 60;
        $('body, html').animate({
            scrollTop: $anchor
        }, 1500);
        event.preventDefault();
        return false;
    });

    /*----------------------------
     Water JS Skill Box
    ------------------------------ */
   
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });
    /*----------------------------
     Preloader
    ------------------------------ */
    $(window).on('load',function () {
        $("#status").on('fadeOut',"slow");
        $("#preloader").on('delay',2000).on('fadeOut',"slow").remove();
    })

})(jQuery);