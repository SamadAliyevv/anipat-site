$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $(document).ready(function(){
    $('.counter').counterUp({
      delay: 10, // animasyonun gecikme süresi
      time: 4000, // animasyonun tamamlanma süresi
      formatter: function (n) {
        return n + '+'; // Sayının sonuna "+" sembolünü ekleyerek gösterme
      }
    });
  });
  // review-active
$('.slider_active').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    autoplay:true,
    nav:false,
    dots:true,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
  });
  // review-active
  $('.textmonial_active').owlCarousel({
    loop:true,
    margin:100,
    items:1,
    autoplay:true,
    navText:['<i class="Flaticon flaticon-left"></i>','<i class="Flaticon flaticon-right"></i>'],
    nav:true,
    dots:false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        767:{
            items:1,
            nav:true,
        },
        992:{
            items:1
        }
    }
  });
  
  // about_active
  $('.about_active').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    autoplay:true,
    navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:true,
    dots:false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        767:{
            items:1,
            nav:false,
        },
        992:{
            items:1
        }
    }
  });
  
  // review-active
  $('.testmonial_active').owlCarousel({
    loop:true,
    margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false,
        },
        767:{
            items:1,
            dots:false,
            nav:false,
        },
        992:{
            items:1,
            nav:false
        },
        1200:{
            items:1,
            nav:false
        },
        1500:{
            items:1
        }
    }
  });