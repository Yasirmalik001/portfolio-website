var btn = document.querySelector(".circle__up");
const checkScroll = () => {
  switch (true) {
    case window.scrollY < 100:
      btn.classList.remove("button-show");
      break;
    case window.scrollY >= 200:
      btn.classList.add("button-show");
      break;
  }
};

checkScroll();
window.addEventListener("scroll", checkScroll);

var btn = document.querySelector(".circle__up");
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

gsap.to("header", {
  backgroundColor: "#212121",
  height: "60px",
  duration: 0.5,
  delay: 1,
  scrollTrigger: {
    trigger: "#header",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

var Swipes = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "1",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  // slidesPerView: 7,
  centeredSlides: true,
  loop: true,
  freeMode: true,
  speed: 8000,
  // parallax: true,
  autoplayDisableOnInteraction: false,

  // mousewheel: {
  //   invert: true,
  // },
  // effect: "coverflow",
  // coverflowEffect: {
  //   rotate: 30,
  //   slideShadows: false,
  // },
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    // 220: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
    },
    840: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
    },
    1040: {
      slidesPerView: 5,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
    },
    1240: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1740: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
