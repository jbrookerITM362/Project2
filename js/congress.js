//var slideIndex = 1;

window.onload = function() {
  showSlides();
};

//showSlides(slideIndex);


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo cursor");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo cursor");
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

document.getElementById("prev").addEventListener("click", function(){
    plusSlides(-1);
    alert("test");
});
document.getElementById("next").addEventListener("click", function(){
    plusSlides(1);
});
document.getElementById("photo1").addEventListener('click', function(){
    currentSlide(1);
});
document.getElementById("photo2").addEventListener('click', function(){
    currentSlide(2);
});
document.getElementById("photo3").addEventListener('click', function(){
    currentSlide(3);
});
document.getElementById("photo4").addEventListener('click', function(){
    currentSlide(4);
});
document.getElementById("photo5").addEventListener('click', function(){
    currentSlide(5);
});
document.getElementById("photo6").addEventListener('click', function(){
    currentSlide(6);
});
*/
