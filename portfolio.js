document.getElementById("portfolioForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();
  const college = document.getElementById("college").value.trim();
  const fileInput = document.getElementById("portfolioFile");
  const fileInfo = document.getElementById("fileInfo");

  if (!fileInput.files.length) {
    fileInfo.textContent = "⚠️ Please upload your portfolio PDF.";
    fileInfo.style.color = "orange";
    return;
  }

  const file = fileInput.files[0];

  if (file.type !== "application/pdf") {
    fileInfo.textContent = "❌ Only PDF files are allowed.";
    fileInfo.style.color = "red";
    return;
  }

  // Show confirmation
  fileInfo.textContent = `✅ ${name}, your portfolio (${file.name}) has been uploaded successfully!`;
  fileInfo.style.color = "lightgreen";

  // (Optional) Here you’d send the file to backend/server using fetch or AJAX
});
