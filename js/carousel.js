const mCarousel = new Carousel(document.querySelector(".carousel"), {
  Dots: false,

  center: false,

  slidesPerPage: 1,

  Navigation: {
    prevTpl:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
    nextTpl:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
  },

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
