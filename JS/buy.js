console.log("Test!");
const confettiButton = document.getElementById("confetti-button");

confettiButton.addEventListener("click", function () {
  event.preventDefault();
  confetti();
  confetti();
});
