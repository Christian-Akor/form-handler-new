// Function to open the popup form
function openPopup() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Close popup when clicking outside the form
window.onclick = function (event) {
    if (event.target == document.getElementById('overlay')) {
         document.getElementById('popupForm').style.display = 'none';
         document.getElementById('overlay').style.display = 'none';
    }
 }

// Show success or error message after form submission
document.getElementById("requestForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;

    // Simulate form submission
    fetch("../form-handler/index.js", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
    })
        .then(() => {
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
            form.reset();
        })
        .catch(() => {
            document.getElementById("successMessage").style.display = "none";
            document.getElementById("errorMessage").style.display = "block";
        });
};
