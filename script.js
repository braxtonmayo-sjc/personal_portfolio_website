const Themebutton = document.getElementById("themeBtn");
const image = document.getElementById("gallery");

let darkMode = false;
Themebutton.addEventListener("click", () => {
  darkMode = !darkMode; // flip between true/false
  document.body.classList.toggle("dark", darkMode);
 
  if (darkMode) {
    Themebutton.textContent = "Switch to Light Mode";
  } else {
    Themebutton.textContent = "Switch to Dark Mode";
  }
});


gallery.addEventListener("mouseover", () => {
  gallery.src = "assests/images/Bluebonnets.JPG"
 });
gallery.addEventListener("mouseout", () => {
  gallery.src = "assests/images/Clyde.jpg"
});
