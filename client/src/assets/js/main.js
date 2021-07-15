// /**
// * Template Name: Lonely - v2.0.0
// * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-lonely/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var Isotope = require('isotope-layout')
require("jquery-sticky/jquery.sticky");
require("jquery.easing/jquery.easing");
require('waypoints/lib/jquery.waypoints')
require("jquery.counterup/jquery.counterup");
require('venobox/venobox/venobox.js');
require('owl.carousel');

var hljs = require('highlight.js/lib/core.js');
var python = require('highlight.js/lib/languages/python');
var javascript = require('highlight.js/lib/languages/javascript');
var html = require('highlight.js/lib/languages/htmlbars');
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.initHighlightingOnLoad();

!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;
        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
    $(document).on('click', '.mobile-nav-toggle', function() {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  //ancien code
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  //nouveau code 
  // new Waypoint({
  //   element: document.getElementById('.skills-content'),
  //   handler: function() {
  //     console.log('Scrolled to waypoint!')
  //   }
  // })

  // jQuery counterUp

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


  // Porfolio isotope and filter
  $(window).on('load', function() {
    //ancien code iso
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //   itemSelector: '.portfolio-item',
    //   layoutMode: 'fitRows'
    // });

    //nouveau code
    var iso = new Isotope('.portfolio-container',{
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'     
    })

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      //ancien code iso
      // portfolioIsotope.isotope({
      //   filter: $(this).data('filter')
      // });

      //nouveau code
      iso.arrange({ 
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

})(window.jQuery);

