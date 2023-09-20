$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        adaptiveHeight:true,
        slidesToShow: 5 ,
        centerMode: true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:4
                }
            }
        ]
    });
    $(".as-horizontal-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        asNavFor: ".as-vertical-slider",
        prevArrow:'<button class="slick-prev slick-arrow " aria-label="Previous" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow:'<button class="slick-next slick-arrow " aria-label="Next" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.49996 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      });
    
      $(".as-vertical-slider").slick({
        vertical: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: false,
        asNavFor: ".as-horizontal-slider",
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      });
      
      let t = $("#back-top");
      $(window).on("scroll", function () {
        ($scrollTop = $(window).scrollTop()),
          (t = $("#back-top")),
          $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");
    
        $scrollTop > 0
          ? $(".es-navbar").addClass("es-navbar-fixed")
          : $(".es-navbar").removeClass("es-navbar-fixed");
      });
      ($htmlBody = $("html, body")),
        t.length &&
          t.on("click", function (t) {
            $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
          });
})

