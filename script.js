document.getElementById("searchBtn").addEventListener("click", function () {
  const skill = document.getElementById("searchSkill").value.toLowerCase();
  const role = document.getElementById("roleSelect").value;
  const profiles = document.querySelectorAll(".profile-card");

  profiles.forEach(profile => {
    const skills = profile.innerText.toLowerCase();
    const roleText = profile.innerText;

    if (
      (skill === "" || skills.includes(skill)) &&
      (role === "" || roleText.includes(role))
    ) {
      profile.style.display = "block";
    } else {
      profile.style.display = "none";
    }
  });
});

document.querySelectorAll(".profile-card .btn").forEach(button => {
  button.addEventListener("click", function () {
    if (this.classList.contains("connected")) {
      this.textContent = "Connect";
      this.classList.remove("connected");
    } else {
      this.textContent = "Connected ✅";
      this.classList.add("connected");





    }
  });
});

