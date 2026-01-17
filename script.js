const slides = document.querySelectorAll('.carousel-images .slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}


next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});


setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000);

