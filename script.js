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
