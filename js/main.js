  
var modalBtns = document.querySelectorAll(".modal-open");


modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

function closeModal(){
    content.style.display = 'none';

}

var closeBtns = document.querySelectorAll(".X");
var closeBtns = document.querySelectorAll(".modal");

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest(".modal").style.display = "none");
    };
});






// 
//  var buttonTwo = document.querySelector('.btn2');
// var backdrop = document.querySelector('.modal-parent');
// var modal = document.querySelector('.modal1');
// var x = document.querySelector('.X');
// var modalTwo = querySelector('.modal2');

// function openModal() {
//     backdrop.style.display = 'block';
//     modal.style.display = 'block';
// }

// function closeModal() {
//     backdrop.style.display = 'none';
//     modal.style.display = 'none';

// }

// button.onclick = openModal;


// x.onclick = closeModal;
// modal.onclick = closeModal;





// slider images
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}





   


