


  export let crousel = {
    // focusOnSelect: true,
    infinite:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
