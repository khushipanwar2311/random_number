function getRandomNumber() {
  let num = Math.floor(Math.random() * 100) + 1;

  return num;
}

document.getElementById("btn").addEventListener("click", function () {
  let number = getRandomNumber();
  document.getElementById("numdisplay").textContent = number;
});
