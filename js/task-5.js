function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color-btn");
const colorName = document.querySelector(".color");

colorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorName.innerHTML = `${newColor}<br>${document.body.style.backgroundColor}`;
});
