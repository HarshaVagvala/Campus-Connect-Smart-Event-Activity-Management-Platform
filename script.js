/**
 * CAMPUS CONNECT - SMART EVENT MANAGEMENT PLATFORM
 * Stage 2: JavaScript Functionality
 */

// --- FEATURE 1: IMAGE CAROUSEL LOGIC ---
let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Remove active class from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if(slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        if(dots.length > 0) dots[slideIndex-1].className += " active";
    }
}

// Auto-play for Carousel
setInterval(() => moveSlide(1), 5000);


// --- FEATURE 2: DARK / LIGHT MODE TOGGLE ---
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Save preference to LocalStorage (Extra Enhancement)
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
});


// --- FEATURE 3: EVENT FILTERING SYSTEM ---
function filterEvents(category) {
    const cards = document.querySelectorAll('.event-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button styling
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    cards.forEach(card => {
        // Animation effect: Fade out then filter
        card.style.opacity = '0';
        setTimeout(() => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
            }
        }, 300);
    });
}


// --- FEATURE 4: REGISTRATION INTERACTION (ALERTS) ---
function showAlert(eventName) {
    alert(`Registration Successful for: ${eventName}\nCheck your college email for the confirmation QR code.`);
}


// --- FEATURE 5: SMART FORM VALIDATION ---
const activityForm = document.getElementById('activityForm');
const feedback = document.getElementById('formFeedback');

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('actEmail').value;
    const name = document.getElementById('actName').value;

    // Validation: Only allow college domains
    if (!email.endsWith('.edu') && !email.includes('@college')) {
        feedback.innerText = "Error: Please use a valid institutional email address.";
        feedback.style.color = "#e74c3c";
    } else {
        feedback.innerText = `Success! Thank you ${name}, your activity is under review.`;
        feedback.style.color = "#2ecc71";
        activityForm.reset();
    }
});
