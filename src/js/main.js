import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";
import Swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", function () {
  //Инициализация свайпер под мобильную версию
  if (window.innerWidth < 768) {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 16,
    });
  }
});

// Боковое меню
//выбор блока, с котроым будет происходить взаимодействие
const aside = document.querySelector(".aside");
//появление области при открытом aside
const asideOverlay = document.querySelector(".aside__overlay");

const openAside = document.querySelector(".hamburger");
const closeAside = document.querySelector(".close-aside");

openAside.addEventListener("click", () => {
  aside.classList.add("active");
});
closeAside.addEventListener("click", () => {
  aside.classList.remove("active");
});
asideOverlay.addEventListener("click", () => {
  aside.classList.remove("active");
});

//===============================================================================

//Модальные окна
//Feedback
const modalFeedback = document.querySelector(".modal-feedback"); //окно
const openAsideFeedback = document.querySelector(".aside-feedback"); //кнопка открыть окно через боковую панель
const closeModalFeedback = document.querySelector(".modal__close_feedback"); //кнопка закрыть окно
const openMenuFeedback = document.querySelector(".menu-feedback"); //кнопка открыть окно через шапку
const modalOverlayFeedback = document.querySelector(".modal__overlay-feedback"); //закрытие по клику на область вне окна

openMenuFeedback.addEventListener("click", () => {
  modalFeedback.classList.add("active");
});
openAsideFeedback.addEventListener("click", () => {
  modalFeedback.classList.add("active");
});
closeModalFeedback.addEventListener("click", () => {
  modalFeedback.classList.remove("active");
});
modalOverlayFeedback.addEventListener("click", () => {
  modalFeedback.classList.remove("active");
});

//Call
const modalCall = document.querySelector(".modal-call");
const openAsideCall = document.querySelector(".aside-call");
const closeModalCall = document.querySelector(".modal__close_call");
const openMenuCall = document.querySelector(".menu-call");
const modalOverlayCall = document.querySelector(".modal__overlay-call");

openMenuCall.addEventListener("click", () => {
  modalCall.classList.add("active");
});
openAsideCall.addEventListener("click", () => {
  modalCall.classList.add("active");
});
closeModalCall.addEventListener("click", () => {
  modalCall.classList.remove("active");
});
modalOverlayCall.addEventListener("click", () => {
  modalCall.classList.remove("active");
});

//==========================================================================

// Получение ссылки на кнопку с классом "technic__click_show"
const btn = document.querySelector(".technic__click_show");
// Получение массива карточек с классом "swiper-slide"
const cards = Array.from(document.querySelectorAll(".swiper__card"));

// Получение ссылки на кнопку с классом "types__click_show"
const btnTypes = document.querySelector(".types__click_show");
// Получение массива карточек с классом "swiper-slide-types"
const cardsTypes = Array.from(
  document.querySelectorAll(".swiper__cards-types")
);

// Добавление обработчиков события "resize" и "click"
window.addEventListener("resize", handleResize);
btn.addEventListener("click", handleClick);
window.addEventListener("resize", handleResizeTypes);
btnTypes.addEventListener("click", handleClickTypes);

// Функция обработчика события "resize"

const BREAKPOINT_L = 1120;
const BREAKPOINT_M = 768;
const BREAKPOINT_S = 320;

function computeFirstHiddenCardIndex() {
  // 0..320     321..767    768..1119   1120..
  // Infinity   Infinity    6            8

  let firstHiddenCardIndex = Infinity;
  if (window.innerWidth >= BREAKPOINT_M && window.innerWidth < BREAKPOINT_L) {
    firstHiddenCardIndex = 6;
  } else if (window.innerWidth >= BREAKPOINT_L) {
    firstHiddenCardIndex = 8;
  }
  return firstHiddenCardIndex;
}

function handleResize() {
  const firstHiddenCardIndex = computeFirstHiddenCardIndex();
  cards.forEach((item, index) => {
    item.classList.add("is--hidden");
    if (index < firstHiddenCardIndex) {
      item.classList.remove("is--hidden");
    }
  });
}

// Функция обработчика события "click" на кнопке
function handleClick() {
  const firstHiddenCardIndex = computeFirstHiddenCardIndex();
  btn.classList.toggle("technic__click_hide");

  cards.forEach((item, index) => {
    if (index >= firstHiddenCardIndex) {
      item.classList.toggle("is--hidden");
    }
  });
  if (btn.textContent === "Показать все") {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать все";
  }
}
// Вызов функций при загрузке страницы
handleResize();

function computeSecondHiddenCardIndex() {
  // 0..320     321..767    768..1119   1120..
  // Infinity   Infinity    6            8

  let secondHiddenCardIndex = Infinity;
  if (window.innerWidth >= BREAKPOINT_M && window.innerWidth < BREAKPOINT_L) {
    secondHiddenCardIndex = 3;
  } else if (window.innerWidth >= BREAKPOINT_L) {
    secondHiddenCardIndex = 4;
  }
  return secondHiddenCardIndex;
}

function handleResizeTypes() {
  const secondHiddenCardIndex = computeSecondHiddenCardIndex();
  cardsTypes.forEach((item, index) => {
    item.classList.add("is--hidden");
    if (index < secondHiddenCardIndex) {
      item.classList.remove("is--hidden");
    }
  });
}

function handleClickTypes() {
  const secondHiddenCardIndex = computeSecondHiddenCardIndex();
  btnTypes.classList.toggle("types__click_hide");

  cardsTypes.forEach((item, index) => {
    if (index >= secondHiddenCardIndex) {
      item.classList.toggle("is--hidden");
    }
  });
  if (btnTypes.textContent === "Показать все") {
    btnTypes.textContent = "Скрыть";
  } else {
    btnTypes.textContent = "Показать все";
  }
}

//Вызов функции handleResizeTypes при загрузке страницы
handleResizeTypes();
