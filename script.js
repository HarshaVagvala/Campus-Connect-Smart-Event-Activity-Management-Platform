
function showAlert() {
    alert("Button clicked successfully!");
}

function toggleEvents() {
    var x = document.getElementById("eventList");
    x.style.display = x.style.display === "none" ? "block" : "none";
}

function validateForm() {
    var name = document.getElementById("name").value;
    if(name === "") {
        alert("Please enter your name");
        return false;
    }
    alert("Form submitted");
    return true;
}
