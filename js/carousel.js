const mCarousel = new Carousel(document.querySelector(".carousel"), {
  Dots: false,

  center: false,

  on: {
    init: (carousel) => {
      carousel.$index = carousel.$container.querySelector(".carousel_index");
      carousel.$count = carousel.$container.querySelector(".carousel_count");
    },
    refresh: (carousel) => {
      if (carousel.$count) {
        carousel.$count.innerHTML = carousel.pages.length;
      }
    },
    change: (carousel) => {
      if (carousel.$index) {
        carousel.$index.innerHTML = carousel.page + 1;
      }
    },
  },
});
