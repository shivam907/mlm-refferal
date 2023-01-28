document.querySelector(".profile-icon").addEventListener("click", () => {
  document.querySelector(".popUp").classList.toggle("none");
});
document.onkeydown = () => {
  document.querySelector(".popUp").classList.add("none");
  console.log("ok");
};
