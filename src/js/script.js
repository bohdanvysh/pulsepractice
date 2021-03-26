$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next_arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                } 
            }
        ]
      });
  });