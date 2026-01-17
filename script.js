// 1. Carousel Logic
let slideIndex = 1;
showSlides(slideIndex);
function moveSlide(n) { showSlides(slideIndex += n); }
function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "block";
}

// 2. Dark Mode Toggle
document.getElementById('themeToggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
};

// 3. Filter Events
function filterEvents(cat) {
    let cards = document.querySelectorAll('.event-card');
    cards.forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.category === cat) ? "block" : "none";
    });
}

// 4. Registration Alert
function showAlert(name) { alert("Registered for: " + name); }

// 5. Form Validation
document.getElementById('activityForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('formFeedback').innerText = "Submitted successfully!";
    this.reset();
};
