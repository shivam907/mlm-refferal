const menu = document.querySelector(".navbar");
console.log(menu);
menu.addEventListener("click", (el) => {
  document.querySelector(".navigation").classList.remove("none");
  console.log("vadia");
});
const close = document.querySelector(".close");
console.log("kida");
close.addEventListener("click", () => {
  document.querySelector(".navigation").classList.add("none");
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");

    // console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
    $(".nav-el").toggleClass(
      "nav-scroll",
      $(this).scrollTop() > $nav.height() / 3
    );
    $(".navbar ion-icon").toggleClass(
      "chitta",
      $(this).scrollTop() > $nav.height() / 3
    );
    $(".logo").toggleClass("chitta", $(this).scrollTop() > $nav.height() / 3);
  });
});
// ============== toggle accordion =================//
let header = document.querySelectorAll(".accordion-header");

// ============= get all accoridon header =============//
header.forEach((header) => {
  header.addEventListener("click", function (e) {
    let accordion = document.querySelectorAll(".accordion");
    let parentElm = header.parentElement;
    let siblings = this.nextElementSibling;

    // ============= remove accordion body height ==========//
    accordion.forEach((element) => {
      element.children[1].style.maxHeight = null;
    });

    // =========== toggle active class ==============//
    parentElm.classList.toggle("active");
    if (parentElm.classList.contains("active")) {
      // ============== remove active class from all the accordions ===//
      accordion.forEach((element) => {
        element.classList.remove("active");
      });
      // ============== toggle active class where we clicked ========//

      parentElm.classList.toggle("active");
      // ============= set max height ============//
      if (siblings.style.maxHeight) {
        siblings.style.maxHeight = null;
      } else {
        siblings.style.maxHeight = siblings.scrollHeight + "px";
      }
    }
  });
});

window.onload = function () {
  header[0].click();
};
