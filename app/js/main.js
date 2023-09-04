/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/bundle */ "../node_modules/swiper/swiper-bundle.mjs");




document.addEventListener("DOMContentLoaded", function () {
  //Инициализация свайпер под мобильную версию
  if (window.innerWidth < 768) {
    var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"](".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      spaceBetween: 16
    });
  }
}); // Боковое меню
//выбор блока, с котроым будет происходить взаимодействие

var aside = document.querySelector(".aside"); //появление области при открытом aside

var asideOverlay = document.querySelector(".aside__overlay");
var openAside = document.querySelector(".hamburger");
var closeAside = document.querySelector(".close-aside");
openAside.addEventListener("click", function () {
  aside.classList.add("active");
});
closeAside.addEventListener("click", function () {
  aside.classList.remove("active");
});
asideOverlay.addEventListener("click", function () {
  aside.classList.remove("active");
}); //===============================================================================
//Модальные окна
//Feedback

var modalFeedback = document.querySelector(".modal-feedback"); //окно

var openAsideFeedback = document.querySelector(".aside-feedback"); //кнопка открыть окно через боковую панель

var closeModalFeedback = document.querySelector(".modal__close_feedback"); //кнопка закрыть окно

var openMenuFeedback = document.querySelector(".menu-feedback"); //кнопка открыть окно через шапку

var modalOverlayFeedback = document.querySelector(".modal__overlay-feedback"); //закрытие по клику на область вне окна

openMenuFeedback.addEventListener("click", function () {
  modalFeedback.classList.add("active");
});
openAsideFeedback.addEventListener("click", function () {
  modalFeedback.classList.add("active");
});
closeModalFeedback.addEventListener("click", function () {
  modalFeedback.classList.remove("active");
});
modalOverlayFeedback.addEventListener("click", function () {
  modalFeedback.classList.remove("active");
}); //Call

var modalCall = document.querySelector(".modal-call");
var openAsideCall = document.querySelector(".aside-call");
var closeModalCall = document.querySelector(".modal__close_call");
var openMenuCall = document.querySelector(".menu-call");
var modalOverlayCall = document.querySelector(".modal__overlay-call");
openMenuCall.addEventListener("click", function () {
  modalCall.classList.add("active");
});
openAsideCall.addEventListener("click", function () {
  modalCall.classList.add("active");
});
closeModalCall.addEventListener("click", function () {
  modalCall.classList.remove("active");
});
modalOverlayCall.addEventListener("click", function () {
  modalCall.classList.remove("active");
}); //==========================================================================
//==========================================================================
// Получение ссылки на кнопку с классом "technic__click_show"

var btn = document.querySelector(".technic__click_show"); // Получение массива карточек с классом "swiper-slide"

var cards = Array.from(document.querySelectorAll(".swiper__card")); // Получение ссылки на кнопку с классом "types__click_show"

var btnTypes = document.querySelector(".types__click_show"); // Получение массива карточек с классом "swiper-slide-types"

var cardsTypes = Array.from(document.querySelectorAll(".swiper__cards-types")); // Добавление обработчиков события "resize" и "click"

window.addEventListener("resize", handleResize);
btn.addEventListener("click", handleClick);
window.addEventListener("resize", handleResizeTypes);
btnTypes.addEventListener("click", handleClickTypes); // Функция обработчика события "resize"

var BREAKPOINT_L = 1120;
var BREAKPOINT_M = 768;
var BREAKPOINT_S = 320;

function computeFirstHiddenCardIndex() {
  // 0..320     321..767    768..1119   1120..
  // Infinity   Infinity    6            8
  var firstHiddenCardIndex = Infinity;

  if (window.innerWidth >= BREAKPOINT_M && window.innerWidth < BREAKPOINT_L) {
    firstHiddenCardIndex = 6;
  } else if (window.innerWidth >= BREAKPOINT_L) {
    firstHiddenCardIndex = 8;
  }

  return firstHiddenCardIndex;
}

function handleResize() {
  var firstHiddenCardIndex = computeFirstHiddenCardIndex();
  cards.forEach(function (item, index) {
    item.classList.add("is--hidden");

    if (index < firstHiddenCardIndex) {
      item.classList.remove("is--hidden");
    }
  });
} // Функция обработчика события "click" на кнопке


function handleClick() {
  var firstHiddenCardIndex = computeFirstHiddenCardIndex();
  btn.classList.toggle("technic__click_hide");
  cards.forEach(function (item, index) {
    if (index >= firstHiddenCardIndex) {
      item.classList.toggle("is--hidden");
    }
  });

  if (btn.textContent === "Показать все") {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать все";
  }
} // Вызов функций при загрузке страницы


handleResize(); //Вызов функции дял блока Types

function computeSecondHiddenCardIndex() {
  // 0..320     321..767    768..1119   1120..
  // Infinity   Infinity    6            8
  var secondHiddenCardIndex = Infinity;

  if (window.innerWidth >= BREAKPOINT_M && window.innerWidth < BREAKPOINT_L) {
    secondHiddenCardIndex = 3;
  } else if (window.innerWidth >= BREAKPOINT_L) {
    secondHiddenCardIndex = 4;
  }

  return secondHiddenCardIndex;
}

function handleResizeTypes() {
  var secondHiddenCardIndex = computeSecondHiddenCardIndex();
  cardsTypes.forEach(function (item, index) {
    item.classList.add("is--hidden");

    if (index < secondHiddenCardIndex) {
      item.classList.remove("is--hidden");
    }
  });
}

function handleClickTypes() {
  var secondHiddenCardIndex = computeSecondHiddenCardIndex();
  btnTypes.classList.toggle("types__click_hide");
  cardsTypes.forEach(function (item, index) {
    if (index >= secondHiddenCardIndex) {
      item.classList.toggle("is--hidden");
    }
  });

  if (btnTypes.textContent === "Показать все") {
    btnTypes.textContent = "Скрыть";
  } else {
    btnTypes.textContent = "Показать все";
  }
} //Вызов функции handleResizeTypes при загрузке страницы


handleResizeTypes();

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-close.svg */ "./img/icon/ic-close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/Group.svg */ "./img/icon/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-search.svg */ "./img/icon/ic-search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-call.svg */ "./img/icon/ic-call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-chat.svg */ "./img/icon/ic-chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-profile.svg */ "./img/icon/ic-profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/burger.svg */ "./img/icon/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/checkstatus.svg */ "./img/icon/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/repair.svg */ "./img/icon/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../img/icon/highlight_1120.svg */ "./img/icon/highlight_1120.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/highlight.svg */ "./img/icon/highlight.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mg-3223.png */ "./img/mg-3223.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-go_brand.svg */ "./img/icon/ic-go_brand.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewSonic.png */ "./img/viewSonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosch.png */ "./img/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/gosideAll.svg */ "./img/icon/gosideAll.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/ic-more.svg */ "./img/icon/ic-more.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/Send.svg */ "./img/icon/Send.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n  <title>new site</title>\r\n</head>\r\n\r\n<body>\r\n  <aside class=\"aside\">\r\n    <div class=\"aside__wrapper\">\r\n      <section class=\"aside__top\">\r\n        <header class=\"header-aside\">\r\n          <div class=\"header-aside__burger\">\r\n            <button class=\"header-aside__burger header-aside__icon close-aside\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"burger-close\">\r\n            </button>\r\n            <button class=\"header-aside__burger header-aside__logo\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Group\">\r\n            </button>\r\n          </div>\r\n          <div class=\"header-aside__search\">\r\n            <button class=\"header-aside__search header-aside__icon\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"search\">\r\n            </button>\r\n          </div>\r\n        </header>\r\n        <nav class=\"nav-items\">\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Ремонт техники</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Услуги и сервисы</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Корпоративным клиентам</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Продавцам техники</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Партнерам</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Производителям</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Наши сервисные центры</a>\r\n          <a class=\"nav-items__item\" href=\"#\">\r\n            Контакты</a>\r\n        </nav>\r\n      </section>\r\n      <section class=\"aside__bottom\">\r\n        <footer class=\"foot\">\r\n          <div class=\" foot foot__icons\">\r\n            <button class=\"btn icon aside-call\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"call\">\r\n            </button>\r\n            <button class=\"btn icon aside-feedback\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"chat\">\r\n            </button>\r\n            <button class=\"btn icon\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"profile\">\r\n            </button>\r\n          </div>\r\n          <div class=\"foot foot__contacts\">\r\n            <a href=\"mail@cps.com\" class=\"foot__contacts-email\">mail@cps.com</a>\r\n            <a href=\"8 800 890 8900\" class=\"foot__contacts-number\">8 800 890 8900</a>\r\n          </div>\r\n          <div class=\"foot foot__languages\">\r\n            <button class=\"foot__language \">RU</button>\r\n            <button class=\"foot__language \">EN</button>\r\n            <button class=\"foot__language \">CH</button>\r\n          </div>\r\n        </footer>\r\n      </section>\r\n    </div>\r\n    <div class=\"aside__overlay\"></div>\r\n  </aside>\r\n  <header class=\"menu\">\r\n    <div class=\"container\">\r\n      <div class=\"menu__nav\">\r\n        <div class=\"menu__burger\">\r\n          <img class=\"btn menu__icon hamburger\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"burger\">\r\n          <div class=\"menu__divider menu__divider_mod\"></div>\r\n          <img class=\"menu__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Group\">\r\n        </div>\r\n        <div class=\"menu__icon-wrap\">\r\n          <img class=\"btn menu__hiden menu-call\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Call\">\r\n          <img class=\"btn menu__hiden menu-feedback\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Chat\">\r\n          <img class=\"btn menu__hiden\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Profile\">\r\n\r\n          <div class=\"menu__divider menu__divider_icon-wrap\"></div>\r\n          <img class=\"btn menu__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"checkstatus\">\r\n          <img class=\"btn menu__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"repair\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <main class=\"main\">\r\n    <section class=\"services\">\r\n      <div class=\"services__header\">\r\n        <div class=\"services-title\">\r\n          <picture class=\"services-title__logo\">\r\n            <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" media=\"(min-width:1120px)\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"highlight\">\r\n          </picture>\r\n          <h1 class=\"services-title__text\">\r\n            Услуги и сервисы\r\n          </h1>\r\n        </div>\r\n        <div class=\" header-desktop\">\r\n          <div class=\"header-desktop__text\">\r\n            <button class=\"header-desktop__text header-desktop__text_mod_desktop\">Оставить заявку\r\n              <img class=\"image_1120\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"repair\">\r\n            </button>\r\n          </div>\r\n          <div class=\"header-desktop__text\">\r\n            <button class=\"header-desktop__text header-desktop__text_mod_desktop\">Статус ремонта\r\n              <img class=\"image_1120\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"checkstatus\">\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"services__nav\">\r\n        <nav class=\"services__nav scroll\">\r\n          <a class=\"scroll__item\" href=\"#\">Ремонтируемые устройства</a>\r\n          <a class=\"scroll__item\" href=\"#\">Дополнительные услуги</a>\r\n          <a class=\"scroll__item\" href=\"#\">Цены на услуги</a>\r\n          <a class=\"scroll__item\" href=\"#\">Адреса сервисных центров</a>\r\n          <a class=\"scroll__item\" href=\"#\">Специальные цены</a>\r\n          <a class=\"scroll__item\" href=\"#\">Отзывы</a>\r\n        </nav>\r\n      </div>\r\n      <div class=\"services__text\">\r\n        <div class=\"services-text\">\r\n          <h2 class=\"services-text__all\">Мы являемся авторизованным сервисным центром по ремонту техники\r\n            Dell.\r\n            Только у нас вы можете\r\n            отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br><br>\r\n            <span class=\"services-text__all_768\">Мы успешно работаем с\r\n              1992 года и заслужили репутацию надежного партнера</span>\r\n            <span class=\"services-text__all_1120\">, что\r\n              подтверждает большое количество\r\n              постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою\r\n              очередь,\r\n              советуют\r\n              нас родным и близким.</span>\r\n            <!-- <span class=\"services-text__dop\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque\r\n              molestias aut ipsum magnam reprehenderit.</span> -->\r\n          </h2>\r\n          <button class=\"services-text__button\">\r\n            <div class=\"services-text__button_show\">Читать далее</div>\r\n          </button>\r\n        </div>\r\n        <div class=\"services-image\">\r\n          <img class=\"services-image__logotip\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"mg-3223\">\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"technic\">\r\n      <div class=\"technic__title\">\r\n        Ремонт техники различных брендов\r\n      </div>\r\n      <div class=\"container\">\r\n        <!-- Slider main container -->\r\n        <div class=\"swiper\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper swiper__content\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide swiper__card \">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"lenovo\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"samsung\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"apple\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"viewSonic\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"bosch\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"hp\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"acer\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"sony\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"lenovo\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"apple\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__card\">\r\n              <div class=\"swiper__logo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"samsung\">\r\n              </div>\r\n              <div class=\"swiper__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- If we need pagination -->\r\n          <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n        <div class=\"technic__click\">\r\n          <span class=\"technic__click_show\">Показать все</span>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"types\">\r\n      <div class=\"types__title\">\r\n        Ремонт различных видов техники\r\n      </div>\r\n      <div class=\"container\">\r\n        <!-- Slider main container -->\r\n        <div class=\"swiper\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper swiper__content\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide swiper__cards-types \">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт ноутбуков\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт планшетов\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт ПК\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт телефонов\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт мониторов\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт моноблоков\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт тонких клиентов\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт нетбуков\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт неттопов\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper__cards-types\">\r\n              <div class=\"swiper__subtitle-types\">\r\n                Ремонт ультрабуков\r\n              </div>\r\n              <div class=\"swiper__button-types\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"ic-go_brand\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- If we need pagination -->\r\n          <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n        <div class=\"types__click\">\r\n          <span class=\"types__click_show\">Показать все</span>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"price\">\r\n      <div class=\"price__title\">\r\n        цены на услуги\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"price__header\">\r\n          <div class=\"price__header-services\">Ремонтные услуги</div>\r\n          <div class=\"price__header-value\">Цена</div>\r\n          <div class=\"price__header-time\">Срок</div>\r\n        </div>\r\n        <!-- Slider main container -->\r\n        <div class=\"swiper swiper-price\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper swiper-price__content\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide swiper-price__card \">\r\n              <div class=\"swiper-price__service\">\r\n                Диагностика\r\n              </div>\r\n              <div class=\"swiper-price__value\">Бесплатно</div>\r\n              <div class=\"swiper-price__time\">30 мин</div>\r\n              <div class=\"swiper-price__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"goside\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper-price__card\">\r\n              <div class=\"swiper-price__service\">\r\n                Замена дисплея\r\n              </div>\r\n              <div class=\"swiper-price__value\">1 000 ₽</div>\r\n              <div class=\"swiper-price__time\">30-120 мин</div>\r\n              <div class=\"swiper-price__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"goside\">\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper-price__card\">\r\n              <div class=\"swiper-price__service\">\r\n                Замена полифонического динамика\r\n              </div>\r\n              <div class=\"swiper-price__value\">1 000 ₽</div>\r\n              <div class=\"swiper-price__time\">30-120 мин</div>\r\n              <div class=\"swiper-price__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"goside\">\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper-price__card\">\r\n              <div class=\"swiper-price__service\">\r\n                Тестирование с выдачей технического заключения\r\n              </div>\r\n              <div class=\"swiper-price__value\">1 000 ₽</div>\r\n              <div class=\"swiper-price__time\">30-120 мин</div>\r\n              <div class=\"swiper-price__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"goside\">\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper-price__card\">\r\n              <div class=\"swiper-price__service\">\r\n                Замена программного обеспечения\r\n              </div>\r\n              <div class=\"swiper-price__value\">1 000 ₽</div>\r\n              <div class=\"swiper-price__time\">30-120 мин</div>\r\n              <div class=\"swiper-price__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"goside\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- If we need pagination -->\r\n          <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n        <p class=\"price__specification\">\r\n          Все цены указаны с учетом НДС.\r\n          Стоимость ремонта указана на единичную\r\n          услугу.\r\n          Для получения коммерческого предложения на постоянное обслуживание,\r\n          оставьте заявку.\r\n        </p>\r\n        <div class=\"price__link\">\r\n          <a href=\"#\">Получить коммерческое предложение\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"ic-more\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <footer class=\"footer\">\r\n      <div class=\"container\">\r\n        <div class=\"footer__content\">\r\n          <div class=\"footer__team\">\r\n            © 2019 CPS\r\n            Разработано командой Apesong\r\n          </div>\r\n          <div class=\"footer__political\">\r\n            Политика конфиденциальности\r\n          </div>\r\n          <div class=\"footer__info\">\r\n            Информация, размещенная на данной странице, не является публичной офертой\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </main>\r\n  <div class=\"modal modal-feedback\">\r\n    <div class=\"modal__wrapper\">\r\n      <div class=\"modal__icon\">\r\n        <img class=\"btn modal__close modal__close_feedback\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"feedback-close\">\r\n      </div>\r\n      <div class=\"modal__title\">Обратная связь</div>\r\n      <form action=\"#\" class=\"modal__form\">\r\n        <input type=\"text\" name=\"name\" required placeholder=\"Имя\">\r\n        <input type=\"number\" name=\"phone\" required placeholder=\"Телефон\">\r\n        <input type=\"email\" name=\"email\" required placeholder=\"Электронная почта\">\r\n        <textarea name=\"message\" cols=\"auto\" rows=\"auto\" required placeholder=\"Сообщение\"></textarea>\r\n      </form>\r\n      <div class=\"modal__text\">Нажимая “отправить”, вы даете согласие на <a href=\"#\"\r\n          class=\"modal__text modal__text_link\">обработку персональных данных</a> и соглашаетесь с\r\n        нашей <a href=\"#\" class=\"modal__text modal__text_link\">политикой конфиденциальности</a></div>\r\n      <div class=\"modal__button\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"send\">\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__overlay-feedback\"></div>\r\n  </div>\r\n\r\n  <div class=\"modal modal-call\">\r\n    <div class=\"modal__wrapper\">\r\n      <div class=\"modal__icon\">\r\n        <img class=\"btn modal__close modal__close_call\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"call-close\">\r\n      </div>\r\n      <div class=\"modal__title\">Заказать звонок</div>\r\n      <form action=\"#\" class=\"modal__form\">\r\n        <input type=\"number\" name=\"phone\" required placeholder=\"Телефон\">\r\n      </form>\r\n      <div class=\"modal__text\">Нажимая “отправить”, вы даете согласие на <a href=\"#\"\r\n          class=\"modal__text modal__text_link\">обработку персональных данных</a> и соглашаетесь с\r\n        нашей <a href=\"#\" class=\"modal__text modal__text_link\">политикой конфиденциальности</a></div>\r\n      <div class=\"modal__button\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"send\">\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__overlay-call\"></div>\r\n  </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bosch.png":
/*!***********************!*\
  !*** ./img/bosch.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bosch.png";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/icon/Group.svg":
/*!****************************!*\
  !*** ./img/icon/Group.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Group.svg";

/***/ }),

/***/ "./img/icon/Send.svg":
/*!***************************!*\
  !*** ./img/icon/Send.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Send.svg";

/***/ }),

/***/ "./img/icon/burger.svg":
/*!*****************************!*\
  !*** ./img/icon/burger.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/icon/checkstatus.svg":
/*!**********************************!*\
  !*** ./img/icon/checkstatus.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/icon/gosideAll.svg":
/*!********************************!*\
  !*** ./img/icon/gosideAll.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gosideAll.svg";

/***/ }),

/***/ "./img/icon/highlight.svg":
/*!********************************!*\
  !*** ./img/icon/highlight.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/highlight.svg";

/***/ }),

/***/ "./img/icon/highlight_1120.svg":
/*!*************************************!*\
  !*** ./img/icon/highlight_1120.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/highlight_1120.svg";

/***/ }),

/***/ "./img/icon/ic-call.svg":
/*!******************************!*\
  !*** ./img/icon/ic-call.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-call.svg";

/***/ }),

/***/ "./img/icon/ic-chat.svg":
/*!******************************!*\
  !*** ./img/icon/ic-chat.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-chat.svg";

/***/ }),

/***/ "./img/icon/ic-close.svg":
/*!*******************************!*\
  !*** ./img/icon/ic-close.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-close.svg";

/***/ }),

/***/ "./img/icon/ic-go_brand.svg":
/*!**********************************!*\
  !*** ./img/icon/ic-go_brand.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-go_brand.svg";

/***/ }),

/***/ "./img/icon/ic-more.svg":
/*!******************************!*\
  !*** ./img/icon/ic-more.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-more.svg";

/***/ }),

/***/ "./img/icon/ic-profile.svg":
/*!*********************************!*\
  !*** ./img/icon/ic-profile.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-profile.svg";

/***/ }),

/***/ "./img/icon/ic-search.svg":
/*!********************************!*\
  !*** ./img/icon/ic-search.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ic-search.svg";

/***/ }),

/***/ "./img/icon/repair.svg":
/*!*****************************!*\
  !*** ./img/icon/repair.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/mg-3223.png":
/*!*************************!*\
  !*** ./img/mg-3223.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/mg-3223.png";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/viewSonic.png":
/*!***************************!*\
  !*** ./img/viewSonic.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/viewSonic.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-a8a7ae"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map