const Themebutton = document.getElementById("themeBtn");

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

const slides = document.querySelectorAll('.slides img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentSlide = 0;

function showSlide(index) {
  // Remove 'active' class from current slide
  slides[currentSlide].classList.remove('active');
  // Update index with wrap-around logic
  currentSlide = (index + slides.length) % slides.length;
  // Add 'active' class to new slide
  slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
