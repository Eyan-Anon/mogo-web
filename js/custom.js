jQuery(function($) {
    // stickUP js code start
    $(document).ready( function() {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
      });
    // stickUP js code end
   // animation number counter js start
    $('.number1').animationCounter({
          start: 0,
          end: 42,
          step: 2,
          delay: 100
  });
  $('.number2').animationCounter({
    start: 0,
    end: 123,
    step: 3,
    delay: 80
 });
 $('.number3').animationCounter({
    start: 0,
    end: 15,
    step: 3,
    delay: 200
 }); 
 $('.number4').animationCounter({
    start: 0,
    end: 24,
    step: 2,
    delay: 100
});
 // animation number counter js end

//  owl carousel js start
$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:false,
   autoplay:true,
   autoplayTimeout:5000,
   autoplaySpeed:2000,
   dotsSpeed:1000,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
})
//  owl carousel js end

// owl carousel code start

// owl carousel code end

        





  });