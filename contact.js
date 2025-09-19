document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Validation
  if (!name || !email || !subject || !message) {
    formMessage.textContent = "⚠️ Please fill in all fields.";
    formMessage.style.color = "orange";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "⚠️ Enter a valid email address.";
    formMessage.style.color = "orange";
    return;
  }

  
  formMessage.textContent = "✅ Message sent successfully! We'll get back to you soon.";
  formMessage.style.color = "lightgreen";

  // Reset form
  document.getElementById("contactForm").reset();
});
