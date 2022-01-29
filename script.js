var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "grid";
  
}

const spaceship = document.querySelector(".spaceship");

function launch(){
  spaceship.style.display="block";

 myMove();
  
}

function myMove() {
  let id = null;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  clearInterval(id);
  id = setInterval(frame, 0.01);
  function frame() {
    if (scrollTop == 2550) {
      clearInterval(id);
    } else {
      scrollTop++;
      console.log(scrollTop);
      document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
    }
  }
}