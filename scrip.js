// Function to open the popup form
function openPopup() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Close popup when clicking outside the form
window.onclick = function (event) {
    if (event.target == document.getElementById("overlay")) {
        closePopup();
    }
};

// Show success or error message after form submission
document.getElementById("requestForm").onsubmit = async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("https://landing-page-iorg.onrender.com/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataObject),
        });

        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
            form.reset();
            closePopup();
        } else {
            throw new Error("Failed to submit form");
        }
    } catch (error) {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
    }
};
