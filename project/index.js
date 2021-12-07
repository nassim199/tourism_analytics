const html = document.documentElement;
const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const switchInput = document.querySelector(".switch input");
const switchLabel = document.querySelector(".switch label");
const collapsedClass = "collapsed";
const lightModeClass = "light-mode";



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks,def;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  if(evt)
  evt.currentTarget.className += " active";
}


var slideIndex = 3;
var slideIndex2 = 2;
var slideIndex3 = 1;


// showSlides(slideIndex);
// showSlides2(slideIndex2);


function plusSlides(n,name) {
  if(name == 'mySlides')
    showSlides(slideIndex += n);
  else 
      if(name == 'mySlide')
       showSlides2(slideIndex2 += n);
     else 
       showSlides3(slideIndex3 += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  console.log(slideIndex)
  slides[slideIndex-1].style.display = "block";  
}
function showSlides2(n) {
  var slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex2-1].style.display = "block";  
}
function showSlides3(n) {
  var slides = document.getElementsByClassName("mypie");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex3-1].style.display = "block";  
}
