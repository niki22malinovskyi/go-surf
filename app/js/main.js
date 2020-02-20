$(function(){
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<img class="slick-arrows arrows-left" src="img/arrows-left.svg"></img>',
    nextArrow: '<img class="slick-arrows arrows-right" src="img/arrows-right.svg"></img>',
    asNavFor: '.header__slick',
  });
  $('.header__slick').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    // focusOnSelect: true,
    // dots: true,
  });


  $('.map__slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    prevArrow: '<img class="slick-arrows map-arrows map-arrowsleft arrows-left" src="img/arrows-left.svg"></img>',
    nextArrow: '<img class="slick-arrows map-arrows map-arrowsright arrows-right" src="img/arrows-right.svg"></img>',
    asNavFor: '.map__slide-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.map__slide-dots').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.map__slide',
    fade: true,
    arrows: false,
  });

  $('.travel__airline__dots').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.travel__slider',
    fade: true,
    prevArrow: '<img class="slick-arrows2 arrow-left" src="img/arrows-left.svg"></img>',
    nextArrow: '<img class="slick-arrows2 arrow-right" src="img/arrows-right.svg"></img>',
  });
  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.travel__airline__dots',
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
  $('.travel__airline').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.travel-airline').css(
      'transform',
      'translate(-' + x * 30 + 'px, -' + y * 30 +'px)'
    );
  });
  $('.sleep__rate__dots').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.sleep__slider',
    fade: true,
    prevArrow: '<img class="slick-arrows2 arrow-left" src="img/arrows-left.svg"></img>',
    nextArrow: '<img class="slick-arrows2 arrow-right" src="img/arrows-right.svg"></img>',
  });
  $('.sleep__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.sleep__rate__dots',
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  $('.sleep__rate').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.sleep-hammock').css(
      'transform',
      'translate(-' + x * 30 + 'px, -' + y * 30 +'px)'
    );
  });
  $('.shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<img class="slick-arrows2 shop-arrows arrow-left" src="img/arrows-left.svg"></img>',
    nextArrow: '<img class="slick-arrows2 shop-arrows arrow-right" src="img/arrows-right.svg"></img>',
  });

  let menu_btn = $(".menu-btn");
  let menu_btn_active = $(".menu-btn_active");
  let menu = $(".menu__list");
  menu_btn.click(function(){
    menu_btn.toggleClass("menu-btn_active");
    menu.toggleClass("menu_active");
  });
  menu_btn_active.click(function(){
    menu_btn.removeClass("menu-btn_active");
  });
  // $('.header__slider').on('mousemove', (e) => {
  //   const x = e.pageX / $(window).width();
  //   const y = e.pageY / $(window).height();

  //   $('.header__slider__item').css(
  //     'transform',
  //     'translate(-' + x * 10 + 'px, -' + y * 10 +'px)'
  //   );
  // });
});