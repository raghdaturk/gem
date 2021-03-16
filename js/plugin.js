 $(document).ready(function() {

     (function($) {
         $.fn.menumaker = function(options) {
             var cssmenu = $(this),
                 settings = $.extend({
                     //title: "",
                     format: "dropdown",
                     sticky: false
                 }, options);

             return this.each(function() {
                 cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
                 $(this).find("#menu-button").on('click', function() {
                     $(this).toggleClass('menu-opened');
                     var mainmenu = $(this).next('ul');
                     if (mainmenu.hasClass('open')) {
                         mainmenu.slideToggle().removeClass('open');
                     } else {
                         mainmenu.slideToggle().addClass('open');
                         if (settings.format === "dropdown") {
                             mainmenu.find('ul').slideToggle();
                         }
                     }
                 });

                 cssmenu.find('li ul').parent().addClass('has-sub');

                 multiTg = function() {
                     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                     cssmenu.find('.submenu-button').on('click', function() {
                         $(this).toggleClass('submenu-opened');
                         if ($(this).siblings('ul').hasClass('open')) {
                             $(this).siblings('ul').removeClass('open').slideToggle();
                         } else {
                             $(this).siblings('ul').addClass('open').slideToggle();
                         }
                     });
                 };

                 if (settings.format === 'multitoggle') multiTg();
                 else cssmenu.addClass('dropdown');

                 if (settings.sticky === true) cssmenu.css('position', 'fixed');

                 resizeFix = function() {
                     if ($(window).width() > 991) {
                         cssmenu.find('ul').show();
                     }

                     if ($(window).width() <= 991) {
                         cssmenu.find('ul').hide().removeClass('open');
                     }
                 };
                 resizeFix();
                 return $(window).on('resize', resizeFix);

             });
         };
     })(jQuery);


     (function($) {
         $(document).ready(function() {

             $("#cssmenu").menumaker({
                 title: "",
                 format: "multitoggle"
             });

         });
     })(jQuery);



     (function($) {
         $(window).on("load", function() {

             /* Page Scroll to id fn call */
             $(".navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                 highlightSelector: ".navigation-menu a"
             });

             /* demo functions */
             $("a[rel='next']").click(function(e) {
                 e.preventDefault();
                 var to = $(this).parent().parent("section").next().attr("id");
                 $.mPageScroll2id("scrollTo", to);
             });

         });
     })(jQuery);

     lc_lightbox('.elem', {
         wrap_class: 'lcl_fade_oc',
         gallery: true,
         thumb_attr: 'data-lcl-thumb',
         skin: 'minimal',
         radius: 0,
         padding: 0,
         border_w: 0,
     });
     //End slider photo  


     $('.team-slider').slick({
         dots: true,
         infinite: true,
         speed: 2000,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [{
                 breakpoint: 991,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
             },
             {
                 breakpoint: 450,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             },
         ]
     });

 });