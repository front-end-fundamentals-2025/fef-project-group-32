/*const inputElement = document.getElementById("Subscribe-input");
const buttonElement = document.getElementById("Subscribe-button");

buttonElement.addEventListener("click", function (event) {
  alert("Thank you for subscribing!");
});


document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
*/

const buttonElement = document.getElementById("Subscribe-button");
const popupElement = document.getElementById("popup");
const closeElement = document.getElementById("close");

buttonElement.addEventListener("click", function (event) {
  popupElement.style.display = "flex";
});

closeElement.addEventListener("click", function (event) {
  popupElement.style.display = "none";
});
