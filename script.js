$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");

    // console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
    $(".nav-el").toggleClass(
      "nav-scroll",
      $(this).scrollTop() > $nav.height() / 3
    );
    // $(".logo").toggleClass("chitta", $(this).scrollTop() > $nav.height() / 3);
  });
});
