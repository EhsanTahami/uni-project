// jQuery(document).ready(function ($) {

//     $('#checkbox').change(function(){
//       setInterval(function () {
//           moveRight();
//       }, 4500);
//     });

//       var slideCount = $('#slider ul li').length;
//       var slideWidth = $('#slider ul li').width();
//       var slideHeight = $('#slider ul li').height();
//       var sliderUlWidth = slideCount * slideWidth;

//       $('#slider').css({ width: slideWidth, height: slideHeight });

//       $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

//       $('#slider ul li:last-child').prependTo('#slider ul');

//       function moveLeft() {
//           $('#slider ul').animate({
//               left: + slideWidth
//           }, 200, function () {
//               $('#slider ul li:last-child').prependTo('#slider ul');
//               $('#slider ul').css('left', '');
//           });
//       };

//       function moveRight() {
//           $('#slider ul').animate({
//               left: - slideWidth
//           }, 200, function () {
//               $('#slider ul li:first-child').appendTo('#slider ul');
//               $('#slider ul').css('left', '');
//           });
//       };

//       $('a.control_prev').click(function () {
//           moveLeft();
//       });

//       $('a.control_next').click(function () {
//           moveRight();
//       });

//   });    



// Swiper part

const swiper = new Swiper('.swiper-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 2000,
  },
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});

// Swiper part end




window.addEventListener('scroll',function(){
  if((window.scrollY >500) && (window.scrollY <600)){
    console.log('ok');
  }
})




var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




window.onscroll = function(){
  if(window.scrollY =515){
    document.getElementById('comeInWarranty').classList.add('comeInWarranty-appear');
    document.getElementById('comeInInstagram').classList.add('comeInWarranty-appear');
  }else{
    document.getElementById('comeInWarranty').classList.remove('comeInWarranty-appear');
    document.getElementById('comeInInstagram').classList.remove('comeInWarranty-appear');

  }

  if(window.scrollY >100){
    document.getElementById('main-part-first').classList.add('comeInWarranty-appear');
  }else{

  }

}