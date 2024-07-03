var splide = new Splide(".splide", {
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    // pagination:false,
    breakpoints: {
      640: {
        perPage: 2,
        gap: ".7rem",
        // height : '6rem',
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        // height : '6rem',
      },
    },
  });
  
  splide.mount();