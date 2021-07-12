const slides = document.querySelectorAll('.slide');

slides.forEach((item) => {
    item.addEventListener('click', (event) => {
        clearActiveClasses();
        item.classList.add('active');
    });
});

function clearActiveClasses() {
    slides.forEach((item) => {
        item.classList.remove('active');
    });
}