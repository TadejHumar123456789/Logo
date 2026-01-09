const colorPicker = document.getElementById("colorPicker");
const logo = document.getElementById("logo");

// Open color picker when clicking the logo
logo.addEventListener("click", () => {
  colorPicker.click();
});

// Change logo color
colorPicker.addEventListener("input", () => {
  logo.setAttribute("fill", colorPicker.value);
});
