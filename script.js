// --- Typewriter Animation ---
const titleEl = document.querySelector("h1");
const texts = ["Ahproya Ahmadkhah", "برنامه‌نویس HTML", "برنامه‌نویس Java", "برنامه‌نویس Python"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
    }

    titleEl.innerHTML = `<span>${currentText}</span>`;

    if (j === texts[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
  }
}
typeEffect();


// --- Dark/Light Mode Toggle ---
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌓";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.fontSize = "1.2rem";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "10px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.backgroundColor = "#00ffe1";
toggleBtn.style.color = "#000";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

let darkMode = true;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode
    ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
    : "#f0f0f0";
  document.body.style.color = darkMode ? "#f4f4f4" : "#111";
  toggleBtn.style.backgroundColor = darkMode ? "#00ffe1" : "#222";
  toggleBtn.style.color = darkMode ? "#000" : "#fff";
});