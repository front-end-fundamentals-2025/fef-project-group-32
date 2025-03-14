const confettiButton = document.getElementById("confetti-button");
//Confetti when you click buy
confettiButton.addEventListener("click", function () {
  event.preventDefault();
  confetti();
  confetti();
});
