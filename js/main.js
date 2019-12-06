//Owl Carousel
$(document).ready(function(){
               $('.owl-carousel').owlCarousel({
            center:true,
             loop:true,
             nav:true,
             responsive:{
                 0:{
                     items:1
                 },
                 600:{
                     items:3
                 },
                 1000:{
                     items:5
                 }
             }
         })
      });

//(((Simple Counter)))
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

//(((Counter - Count when scrolling)))
var a = 0;
$(window).scroll(function() {

  var oTop = $('.facts-2-inside').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// (((Hide menu on Scroll)))
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-65px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// Responsive Topnavigation
function myFunction()
{
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar")
  {
    x.className += "responsive";
  }
  else
  {
    x.className = "navbar";
  }
}

// 
// window.onscroll = function() {scrollFunction()};

//       function scrollFunction() {
//         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//           document.getElementById("myTopnav").style.padding = "15px 80px";
//           } else {
//           document.getElementById("myTopnav").style.padding = "30px 80px";
//          }
//       }