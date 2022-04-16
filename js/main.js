$(function () {
  $(".header__button").click(function () {
    $(".header__top-menu").toggleClass("header__top-menu--active");
    $(".header__button").toggleClass("header__button--active");
  });
  $(".header__top-list").click(function () {
    $(".header__top-menu").removeClass("header__top-menu--active");
    $(".header__button").removeClass("header__button--active");
  });
  $(".header__lg-img").click(function () {
    $(".header__top-lg").toggleClass("header__top-lg--active");
    $(".header__lg-img").toggleClass("header__lg-img--active");
  });
  $(".header__top-lg").click(function () {
    $(".header__top-lg").removeClass("header__top-lg--active");
    $(".header__lg-img").removeClass("header__lg-img--active");
  });
  $(".header__content-location-img").click(function () {
    $(".header__content-box").toggleClass("header__content-box--active");
  });
  $(".header__menu-btn").click(function () {
    $(".header__menu-list").toggleClass("header__menu-list--active");
    $(".header__menu-btn").toggleClass("header__menu-btn--active");
  });
  const btn1 = $(".ally__btn-1");
  const btn2 = $(".ally__btn-2");
  const haract = $(".ally__specifications");
  const order = $(".ally__paper");
  btn2.click(function (e) {
    e.preventDefault(),
      haract.css("display", "none"),
      order.css("display", "block"),
      btn2.addClass("ally__btn-m"),
      btn1.removeClass("ally__btn-m");
  });
  btn1.click(function (e) {
    e.preventDefault(),
      order.css("display", "none"),
      haract.css("display", "block"),
      btn1.addClass("ally__btn-m"),
      btn2.removeClass("ally__btn-m");
  });

  // catalogpage
  let allCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const captcha = document.querySelector(".capcha__text");
  const captcha1 = document.querySelector(".capcha__text1");
  const captchaPopup = document.querySelector(".popup__box-text");
  const captchaPopup2 = document.querySelector(".popup__box-text2");
  const captchaPopup3 = document.querySelector(".popup__box-text3");
  function getCaptcha() {
    for (let i = 0; i < 5; i++) {
      let randomChar =
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
      captcha.innerText += randomChar;
      captcha1.innerText += randomChar;
      captchaPopup.innerText += randomChar;
      captchaPopup2.innerText += randomChar;
      captchaPopup3.innerText += randomChar;
    }
  }
  getCaptcha();
  
  $(".cart__info-btn-calc").on("click", function(e){
    $(".ally__btn-2").trigger(e);
  });
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      400
    );
    return false;
  });
  const dataTime = new AirDatepicker(".data-content__data");
});

$(function () {
  const swiperTopSlider = new Swiper(".top-slider__sect", {
    navigation: {
      nextEl: ".top-slider__next-arrow",
      prevEl: ".top-slider__prev-arrow",
    },
    pagination: {
      el: ".top-slider__pagination",
    },
  });
  const swiperExamples = new Swiper(".examples__sect", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".examples__next-arrow",
      prevEl: ".examples__prev-arrow",
    },
  });
  const swiperCartTop = new Swiper(".cart__swiper", {
    thumbs: {
      swiper: {
        el: ".cart-mini__swiper",
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".cart-mini__next-btn",
      prevEl: ".cart-mini__prev-btn",
    },
  });
  $(".cart-slider__body").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: ".cart-slider__prev-arrow",
    nextArrow: ".cart-slider__next-arrow",
    dots: true,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 856,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".cart-slider__next-body").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: ".cart-slider__next-prev-arrow",
    nextArrow: ".cart-slider__next-next-arrow",
    dots: true,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 856,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".cart-slider__portfolio-body").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: ".cart-slider__portfolio-prev-arrow",
    nextArrow: ".cart-slider__portfolio-next-arrow",
    dots: true,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 856,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  let allCharacters2 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const captcha2 = document.querySelector(".capcha__text2");
  function getCaptcha2() {
    for (let f = 0; f < 5; f++) {
      let randomChar2 =
        allCharacters2[Math.floor(Math.random() * allCharacters2.length)];
      captcha2.innerText += randomChar2;
    }
  }
  getCaptcha2();
  const dataTime = new AirDatepicker(".data-content__data");
});


$(function () {
  $(".catalog__content-btn").click(function () {
    $(".catalog__content-btn").toggleClass("catalog__content-btn--active");
    $(".catalog__aside").toggleClass("catalog__aside--active");
  });
  $(".catalog__button").click(function () {
    $(".catalog__content-btn").removeClass("catalog__content-btn--active");
    $(".catalog__aside").removeClass("catalog__aside--active");
  });
  let allCharactersCatalog = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupCatalog = document.querySelector(".popup__box-textCatalog");
  function getCaptchaPopup() {
    for (let f = 0; f < 5; f++) {
      let randomCharPopup =
        allCharactersCatalog[
          Math.floor(Math.random() * allCharactersCatalog.length)
        ];
      popupCatalog.innerText += randomCharPopup;
    }
  }
  getCaptchaPopup();
  const dataTime = new AirDatepicker(".data-content__data");
});


$(function () {
  let allCharactersVisit = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupVisit = document.querySelector(".popup__box-textVisit");
  
  const popupCatalog2 = document.querySelector(".popup__box-textCatalog2");
  function getCaptchaPopup() {
    for (let f = 0; f < 5; f++) {
      let randomCharPopupVisit =
        allCharactersVisit[
          Math.floor(Math.random() * allCharactersVisit.length)
        ];
      popupVisit.innerText += randomCharPopupVisit;
      popupVisit2.innerText += randomCharPopupVisit;
      popupCatalog2.innerText += randomCharPopupVisit;
    }
  }
  getCaptchaPopup();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  let allCharactersVisit2 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupVisit2 = document.querySelector(".popup__box-textVisit2");

  function getCaptchaPopup2() {
    for (let f = 0; f < 5; f++) {
      let randomCharPopupVisit2 =
        allCharactersVisit2[
          Math.floor(Math.random() * allCharactersVisit2.length)
        ];
      popupVisit2.innerText += randomCharPopupVisit2;
    }
  }
  getCaptchaPopup2();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // index page
  let allCharactersQue = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupIndex = document.querySelector(".popup__box-textIndex");
  const popupIndex2 = document.querySelector(".popup__box-textIndex2");
  function getCaptchaIndex() {
    for (let f = 0; f < 5; f++) {
      let randomCharQue =
        allCharactersQue[
          Math.floor(Math.random() * allCharactersQue.length)
        ];
        popupIndex.innerText += randomCharQue;
        popupIndex2.innerText += randomCharQue;
    }
  }
  getCaptchaIndex();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // Que page
  let allCharactersQue = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupQue = document.querySelector(".popup__box-textQue");
  const popupQue2 = document.querySelector(".popup__box-textQue2");
  function getCaptchaPopup() {
    for (let f = 0; f < 5; f++) {
      let randomCharQue =
        allCharactersQue[
          Math.floor(Math.random() * allCharactersQue.length)
        ];
        popupQue.innerText += randomCharQue;
        popupQue2.innerText += randomCharQue;
    }
  }
  getCaptchaPopup();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // popular page
  let allCharactersPopular = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupPopular = document.querySelector(".popup__box-textPopular");
  const popupPopular2 = document.querySelector(".popup__box-textPopular2");
  function getCaptchaPopup() {
    for (let f = 0; f < 5; f++) {
      let randomCharQue =
        allCharactersPopular[
          Math.floor(Math.random() * allCharactersPopular.length)
        ];
        popupPopular.innerText += randomCharQue;
        popupPopular2.innerText += randomCharQue;
    }
  }
  getCaptchaPopup();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // miscalculation page
  let allCharactersMis = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupMisculc = document.querySelector(".popup__box-textMisculc");
  const popupMisculc2 = document.querySelector(".popup__box-textMisculc2");
  function getCaptchaPopupMis() {
    for (let f = 0; f < 5; f++) {
      let randomCharMis =
      allCharactersMis[
          Math.floor(Math.random() * allCharactersMis.length)
        ];
        popupMisculc.innerText += randomCharMis;
        popupMisculc2.innerText += randomCharMis;
    }
  }
  getCaptchaPopupMis();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // gallery page
  let allCharactersGallery = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupMiscGallery = document.querySelector(".popup__box-textGallery");
  const popupMiscGallery2 = document.querySelector(".popup__box-textGallery2");
  function getCaptchaPopupGallery() {
    for (let f = 0; f < 5; f++) {
      let randomCharGallery =
      allCharactersGallery[
          Math.floor(Math.random() * allCharactersGallery.length)
        ];
        popupMiscGallery.innerText += randomCharGallery;
        popupMiscGallery2.innerText += randomCharGallery;
    }
  }
  getCaptchaPopupGallery();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // choose page
  let allCharactersChoose = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupMiscChoose = document.querySelector(".popup__box-textchoose");
  const popupMiscChoose2 = document.querySelector(".popup__box-textchoose2");
  function getCaptchaPopupChoose() {
    for (let f = 0; f < 5; f++) {
      let randomCharChoose =
      allCharactersChoose[
          Math.floor(Math.random() * allCharactersChoose.length)
        ];
        popupMiscChoose.innerText += randomCharChoose;
        popupMiscChoose2.innerText += randomCharChoose;
    }
  }
  getCaptchaPopupChoose();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // choice page
  let allCharactersChoice = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupMiscChoice = document.querySelector(".popup__box-textChoice");
  const popupMiscChoice2 = document.querySelector(".popup__box-textChoice2");
  function getCaptchaPopupChoice() {
    for (let f = 0; f < 5; f++) {
      let randomCharChoice =
      allCharactersChoice[
          Math.floor(Math.random() * allCharactersChoice.length)
        ];
        popupMiscChoice.innerText += randomCharChoice;
        popupMiscChoice2.innerText += randomCharChoice;
    }
  }
  getCaptchaPopupChoice();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // catalog page
  let allCharacterCat = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupMisCat = document.querySelector(".popup__box-textCat");
  const popupMisCat2 = document.querySelector(".popup__box-textCat2");
  function getCaptchaPopuCat() {
    for (let f = 0; f < 5; f++) {
      let randomChaCat =
      allCharacterCat[
          Math.floor(Math.random() * allCharacterCat.length)
        ];
        popupMisCat.innerText += randomChaCat;
        popupMisCat2.innerText += randomChaCat;
    }
  }
  getCaptchaPopuCat();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // cart page
  let allCharacterCartPort = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupMisCartPort = document.querySelector(".popup__box-textCartPort");
  const popupMisCartPort2 = document.querySelector(".popup__box-textCartPort2");
  function getCaptchaPopuCartPort() {
    for (let f = 0; f < 5; f++) {
      let randomChaCartPort =
      allCharacterCartPort[
          Math.floor(Math.random() * allCharacterCartPort.length)
        ];
        popupMisCartPort.innerText += randomChaCartPort;
        popupMisCartPort2.innerText += randomChaCartPort;
    }
  }
  getCaptchaPopuCartPort();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // calls page
  let allCharacterCalls = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupCalls = document.querySelector(".popup__box-textCalls");
  const popupCalls2 = document.querySelector(".popup__box-textCalls2");
  function getCaptchaPopuCalls() {
    for (let f = 0; f < 5; f++) {
      let randomChaCalls =
      allCharacterCalls[
          Math.floor(Math.random() * allCharacterCalls.length)
        ];
        popupCalls.innerText += randomChaCalls;
        popupCalls2.innerText += randomChaCalls;
    }
  }
  getCaptchaPopuCalls();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // basics page
  let allCharacterBasics = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupBasics = document.querySelector(".popup__box-textBasics");
  const popupBasics2 = document.querySelector(".popup__box-textBasics2");
  function getCaptchaPopuBasics() {
    for (let f = 0; f < 5; f++) {
      let randomChaBasics =
      allCharacterBasics[
          Math.floor(Math.random() * allCharacterBasics.length)
        ];
        popupBasics.innerText += randomChaBasics;
        popupBasics2.innerText += randomChaBasics;
    }
  }
  getCaptchaPopuBasics();
  const dataTime = new AirDatepicker(".data-content__data");
});
$(function(){
  // hole page
  let allCharacterHole = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const popupHole = document.querySelector(".popup__box-textHole");
  const popupHole2 = document.querySelector(".popup__box-textHole2");
  function getCaptchaPopuHole() {
    for (let f = 0; f < 5; f++) {
      let randomChaHole =
      allCharacterHole[
          Math.floor(Math.random() * allCharacterHole.length)
        ];
        popupHole.innerText += randomChaHole;
        popupHole2.innerText += randomChaHole;
    }
  }
  getCaptchaPopuHole();
  const dataTime = new AirDatepicker(".data-content__data");
});