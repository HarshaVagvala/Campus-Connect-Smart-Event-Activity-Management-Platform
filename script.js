// 1. Dark Mode Toggle
document.getElementById('themeToggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
};

// 2. Filter Events
function filterEvents(cat) {
    let cards = document.querySelectorAll('.event-card');
    cards.forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.category === cat) ? "block" : "none";
    });
}

// 3. Registration Alert
function showAlert(name) { alert("Registered for: " + name); }

// 4. Form Validation
document.getElementById('activityForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('formFeedback').innerText = "Submitted successfully!";
    this.reset();
};
