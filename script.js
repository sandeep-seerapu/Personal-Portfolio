function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "Thank you! Your message has been recorded (demo).";
  status.style.color = "#22c55e";
  event.target.reset();
}

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
});
