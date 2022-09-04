let menuBtn = document.querySelector('.menu-btn');
let navbar = document.querySelector('.header .container .navbar');

menuBtn.onclick = function(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    mousewheel: true,
    keyboard: true,
    spaceBetween : 20,
    grabCursor: true,
    loop: true,
    breakpoints: {
        540: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        //   spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
        //   spaceBetween: 50,
        },
      },
  });

  var swiper = new Swiper(".teachers-slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    mousewheel: true,
    keyboard: true,
    spaceBetween : 20,
    grabCursor: true,
    loop: true,
    breakpoints: {
        540: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        //   spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
        //   spaceBetween: 50,
        },
      },
  });

  var swiper = new Swiper(".reviews-slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    mousewheel: true,
    keyboard: true,
    spaceBetween : 20,
    grabCursor: true,
    loop: true,
    breakpoints: {
        540: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        //   spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
        //   spaceBetween: 50,
        },
      },
  });