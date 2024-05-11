var typed = new Typed(".typed", {
  strings: ["digital IDEAS", "digital SUCCESS", "UI/UX DESIGN"],
  typeSpeed: 50,
  backSpeed: 20,
  shuffle: true,
  fadeOut: true,
  loop: true,
});

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

var Swipes = new Swiper(".swiper-container", {
  loop: false,
  slidesPerView: "1",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "5",
  spaceBetween: 10,
  loop: false,
  freeMode: true,
  speed: 10000,
  parallax: false,
  autoplayDisableOnInteraction: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    220: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1040: {
      slidesPerView: 5,
      spaceBetween: 20,
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
