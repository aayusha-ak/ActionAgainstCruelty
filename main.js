// Tab navigation
function openTab(event, tabName) 
{
  var i, contentBox, tablinks;

  contentBox = document.getElementsByClassName("contentBox");
  for (i = 0; i < contentBox.length; i++) {
    contentBox[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(tabName +"Text").style.display = "block";
  event.currentTarget.className += " active";

  
}



document.getElementById("defaultOpen").click();



// Animal slideshow 

let slideIndex = 1;
showSlide(slideIndex);

function pushSlide(n) 
{
  showSlide(slideIndex += n);
}

function currentSlide(n)
{
showSlide(slideIndex = n);
}


function showSlide(n)
{
let i;
let slides = document.getElementsByClassName("animalSlideshow");

if (n > slides.length) { slideIndex = 1; }
if (n < 1) { slideIndex = slides.length; }
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"; 
}
slides[slideIndex - 1].style.display = "block";
}

