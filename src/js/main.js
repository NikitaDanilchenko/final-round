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
