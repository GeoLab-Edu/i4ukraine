var mySwiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 5,
      loopedSlides: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      loopedSlides: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      loopedSlides: 2,
      spaceBetween: 10,
    },
    675: {
      autoplay: true,
      slidesPerView: 4,
      loopedSlides: 1,
      spaceBetween: 20,
    },
    250: {
      autoplay: true,
      slidesPerView: 2,
      loopedSlides: 1,
      spaceBetween: 10,
    },
  },
  on: {
    init: function () {
      checkArrow();
    },
    resize: function () {
      checkArrow();
    },
  },
});

function checkArrow() {
  var swiperPrev = document.querySelector(".swiper-button-prev");
  var swiperNext = document.querySelector(".swiper-button-next");
  if (window.innerWidth < 768) {
    console.log("Success", window.innerWidth);
    swiperPrev.style.display = "block";
    swiperNext.style.display = "block";
  } else {
    swiperPrev.style.display = "none";
    swiperNext.style.display = "none";
  }
}
