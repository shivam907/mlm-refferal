document.querySelector(".profile-icon").addEventListener("click", () => {
  document.querySelector(".popUp").classList.toggle("none");
});
document.onkeydown = () => {
  document.querySelector(".popUp").classList.add("none");
  console.log("ok");
};
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
