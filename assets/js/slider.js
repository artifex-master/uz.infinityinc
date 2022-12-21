$(document).ready(function() {
  $(".mobile-slick-certificates-wrap").slick({
    slidesToShow: 3,
    responsive: [{
      breakpoint: '768',
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        sutoSpeed: 800,
        centerMode: true,
        centerPadding: '35px'
      }
    }, {
      breakpoint: '992',
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    }, {
      breakpoint: '1580',
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px'
      }
    }, {
      breakpoint: '1360',
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '220px'
      }
    }]

    

  });

});