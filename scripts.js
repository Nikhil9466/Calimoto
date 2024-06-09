const radioButtons = document.querySelectorAll('input[name="carousel"]');
let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % radioButtons.length;
    radioButtons[currentIndex].checked = true;
}

setInterval(autoSlide, 3000);
