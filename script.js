document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true; // Changed to 'let'
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be more than 3 characters!");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Invalid email. Email must contain '@' and '.' symbols!");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be more than 8 characters!");
    }

    // Feedback
    if (isValid) {
      feedbackDiv.textContent = "Registration Successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.display = "block";
      form.reset();
    } else {
      feedbackDiv.innerHTML = messages.join("<br />");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
