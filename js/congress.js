var slideIndex = 1;
showSlides(slideIndex);
document.getElementById("prev").addEventListener('click', plusSlides(-1));
document.getElementById("next").addEventListener('click', plusSlides(1));
document.getElementById("photo1").addEventListener('click', currentSlide(1));
document.getElementById("photo2").addEventListener('click', currentSlide(2));
document.getElementById("photo3").addEventListener('click', currentSlide(3));
document.getElementById("photo4").addEventListener('click', currentSlide(4));
document.getElementById("photo5").addEventListener('click', currentSlide(5));

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}