    let slideIndex = 0;
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;

    function moveSlide(step) {
      slideIndex = (slideIndex + step + totalSlides) % totalSlides;
      carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
