import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";
import Swiper from "swiper/bundle";

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
