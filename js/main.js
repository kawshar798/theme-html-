(function ($) {
    "use strict";
    /*================== RESPONSIVE MENU=====================*/

    jQuery('#mobile_menu_active').meanmenu();





    /*----------------------------
START - Smooth scroll animation
------------------------------ */
    $('.main-menu li a, .logo a,.slicknav_nav li a').on('click', function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top-64;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1250,"easeInOutExpo");
                return false;
            }
        }
    });

    /*================== SEARCH PAGE OPEN =====================*/
    $("#search").on("click",function(){
        $(".search-page").addClass("active");
        return false;
    });
    $(".close-search").on("click", function(){
        $(".search-page").removeClass("active");
        return false;
    });







    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    /* magnificPopup video view */


    $('.img-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });



    /*-------------------------
                counter section activation
            ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });





    var $blog_items = $('.blog_items');
    if ($blog_items.length && $.fn.owlCarousel) {
        $blog_items.owlCarousel({
            nav: true,
            center: true,
            loop: true,
            autoplay: true,

            dots: false,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600 :{
                    items: 1
                },
                768: {
                    items: 3
                },1000:{
                    items: 3

                }
                }
        });
    }
    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });
    /*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
    jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('.header_area').addClass("sticky");
        } else {
            $('.header_area').removeClass("sticky");
        }
    });
    /*----------------------------
    Responsive menu Active
    ------------------------------ */
    /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 400) {
            $('#bottom_to_top').fadeIn();
        } else {
            $('#bottom_to_top').fadeOut();
        }
    });
    $("#bottom_to_top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    /*================== SEARCH PAGE OPEN =====================*/
    /*================== SEARCH PAGE OPEN =====================*/
    $("#search").on("click",function(){
        $(".search-page").addClass("active");
        return false;
    });
    $(".close-search").on("click", function(){
        $(".search-page").removeClass("active");
        return false;
    });

    /*--------------------- */
    /*-----------------------------------
  * OWL CAROUSEL
  *-----------------------------------*/


    var $testimonialsDiv = $('.testimonial_sliders');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            //navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        });
    }

    var $brand_items_list = $('.brand_items_list');
    if ($brand_items_list.length && $.fn.owlCarousel) {
        $brand_items_list.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: false,
            //navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }




    $(".protfolio_list").isotope({
        itemSelector: '.single_portfolio',
        layoutMode: 'fitRows'
    });

    // Add isotope click function

    $('.portfolio_filter li').click(function () {
        $(".portfolio_filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".protfolio_list").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    new WOW.init();



}(jQuery));