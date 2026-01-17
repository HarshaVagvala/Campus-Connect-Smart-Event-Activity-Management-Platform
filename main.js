/* ================= MOBILE MENU ================= */
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

/* ================= CONTACT / ACTIVITY FORM VALIDATION ================= */
function validateForm() {
  const name = document.getElementById('name')?.value;
  const email = document.getElementById('email')?.value;
  const message = document.getElementById('message')?.value;

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return false;
  }

  alert("Form submitted successfully!");
  return false; // prevent actual submission (static project)
}

/* ================= EVENTS PAGE DYNAMIC CARDS ================= */
const events = [
  {
    title: "Tech Fest",
    date: "2026-02-01",
    venue: "Auditorium",
    desc: "Annual tech festival"
  },
  {
    title: "Sports Day",
    date: "2026-02-10",
    venue: "Ground",
    desc: "Intercollege sports events"
  },
  {
    title: "Cultural Night",
    date: "2026-02-20",
    venue: "Auditorium",
    desc: "Music & dance performances"
  }
];

const eventContainer = document.getElementById('event-container');

if (eventContainer) {
  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Venue:</strong> ${event.venue}</p>
      <p>${event.desc}</p>
    `;
    eventContainer.appendChild(card);
  });
}

/* ================= GALLERY CAROUSEL WITH AUTO SLIDE + FADE ================= */
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-img');
let autoSlideInterval;

function showSlides(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[n].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

if (slides.length > 0) {
  slides[0].classList.add('active');
  startAutoSlide();
}
