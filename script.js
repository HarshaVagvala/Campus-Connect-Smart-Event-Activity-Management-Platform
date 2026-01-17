// Feature 1: Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Feature 2: Dark/Light Mode Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Feature 3: Event Filtering Logic
function filterEvents(category) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Feature 4: Registration Alert
function showAlert(eventName) {
    alert(`Success! You have registered for: ${eventName}`);
}

// Feature 5: Form Validation & Submission
const activityForm = document.getElementById('activityForm');
const feedback = document.getElementById('formFeedback');

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('actEmail').value;
    
    if (email.includes('@college.edu')) {
        feedback.innerText = "Request submitted successfully!";
        feedback.style.color = "green";
        activityForm.reset();
    } else {
        feedback.innerText = "Please use a valid college email.";
        feedback.style.color = "red";
    }
});
