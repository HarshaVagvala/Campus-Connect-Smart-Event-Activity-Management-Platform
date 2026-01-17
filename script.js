function register() {
  alert("Registered Successfully!");
}

function submitForm() {
  let activity = document.getElementById("activity").value;
  let email = document.getElementById("email").value;
  let desc = document.getElementById("desc").value;

  if (activity === "" || email === "" || desc === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Activity submitted successfully!");
  return false;
}

function filterEvents(type) {
  let cards = document.querySelectorAll(".event-card");

  cards.forEach(card => {
    if (type === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
