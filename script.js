const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevButton.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    nextButton.disabled = false;

    if (currentlySelected === 0) {
        prevButton.disabled = true;
    }
});


nextButton.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevButton.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextButton.disabled = true;
    }
});