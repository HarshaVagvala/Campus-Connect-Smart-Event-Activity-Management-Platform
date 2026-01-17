// Mobile Menu Toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Close menu on mobile link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Contact Form Validation
function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

// Button Click Alert
function showAlert() {
  alert("Explore Events clicked!");
}

// Events Page Dynamic Cards
const events = [
  { title: "Tech Fest", date: "2026-02-01", venue: "Auditorium", desc: "Annual tech festival" },
  { title: "Sports Day", date: "2026-02-10", venue: "Ground", desc: "Intercollege sports events" },
  { title: "Cultural Night", date: "2026-02-20", venue: "Auditorium", desc: "Music & dance performances" }
];

const eventContainer = document.getElementById('event-container');
if (eventContainer) {
  events.forEach(event => {
    let card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `<h3>${event.title}</h3>
                      <p><strong>Date:</strong> ${event.date}</p>
                      <p><strong>Venue:</strong> ${event.venue}</p>
                      <p>${event.desc}</p>`;
    eventContainer.appendChild(card);
  });
}

// Gallery Carousel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-img');

function showSlides(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
}

if (slides.length) {
  showSlides(slideIndex);
  setInterval(nextSlide, 3000);
}
