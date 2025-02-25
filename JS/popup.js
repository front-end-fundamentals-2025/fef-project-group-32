const buttonElement = document.getElementById("Subscribe-button");
const popupElement = document.getElementById("popup");
const inputElement = document.getElementById("email-sub");
const mailElement = document.getElementById("mail");
const closeElement = document.getElementById("close-btn");

buttonElement.addEventListener("click", function (event) {
  popupElement.style.display = "flex";
  let enterdName = inputElement.value;
  mailElement.innerText = enterdName;
});

closeElement.addEventListener("click", function (event) {
  popupElement.style.display = "none";
});
