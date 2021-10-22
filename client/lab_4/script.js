document.addEventListener('DOMContentLoaded', () => {
  let slidePosition = 0;
  const slides = document.querySelectorAll('.carousel_item');
  const totalSlides = slides.length;
  console.log('poop')
  console.log(totalSlides);
  console.log(slides);

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel_item--visible');
      slide.classList.add('carousel_item--hidden'); 
    }
    slides[slidePosition].classList.add('carousel_item--visible');
  }

  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides -1;
    } else {
      slidePosition -= 1;
    }
    updateSlidePosition();
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        console.log('friggin work')
    } else {
      slidePosition += 1;
    }
    updateSlidePosition();
  }

  document.querySelector('#carousel_button--next').addEventListener("click", function() {
      console.log('please work')
      moveToNextSlide();
  });

  document.querySelector('#carousel_button--prev').addEventListener("click", function() {
    moveToPrevSlide();
});
})