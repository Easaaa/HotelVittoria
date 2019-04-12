// SLIDE IMG INDEX PAGE. ---  CONFLICT

var slide_index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slide_index++;
  if (slide_index > x.length) {
    slide_index = 1
  }
  x[slide_index - 1].style.display = "block";
  setTimeout(carousel, 3000); 
}

// TOP BUTTON EFFECT 
$(document).ready(function () {
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  })

  $('#topBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});






