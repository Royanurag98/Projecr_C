  // const colorChanger = (newColor) => {
  //   body = document.querySelector("#root")

  //   let R = Math.floor(Math.random() * 100)
  //   let G = Math.floor(Math.random() * 100)
  //   let B = Math.floor(Math.random() * 100)
  //   let change = `rgb(${R},${G},${B})`
  //   console.log(change)
  //   setColor(newColor = change)
  //   document.body.style.backgroundColor = newColor;
  let toggle = document.querySelector('#toggle');
  let color = "black"; // Declare color outside the event listener
  
  console.log(toggle);
  
  toggle.addEventListener('click', () => {
      if (color === "black") {
          color = "white";
          document.body.style.backgroundColor = color;
      } else {
          color = "black";
          document.body.style.backgroundColor = color;
      }
  });
    



  let currentSlide = 0;
const slides = document.querySelectorAll('.items');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function slideNextImg() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function slidePrevImg() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto slide
// setInterval(slideNextImg, 3000); // Uncomment this line to enable auto slide every 3 seconds


const form = document.querySelector(".container2");
const btn = document.querySelector(".navBtn");
console.log(form);
btn.addEventListener("click", () => {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});