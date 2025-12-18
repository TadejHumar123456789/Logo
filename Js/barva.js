const colorPicker = document.getElementById("colorPicker");
const logo = document.getElementById("logo");

// Dogodek ob spremembi barve
colorPicker.addEventListener("input", () => {
    logo.setAttribute("fill", colorPicker.value);
});