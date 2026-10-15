javascript
const helloButton = document.querySelector("#helloButton");
const message = document.querySelector("#message");

if (helloButton && message) {
  helloButton.addEventListener("click", function () {
    message.textContent = "Thanks for visiting my website!";
  });
}

// Dark / Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const isLightMode = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLightMode
      ? "🌙 Dark mode"
      : "☀️ Light mode";

    themeToggle.setAttribute(
      "aria-label",
      isLightMode ? "Switch to dark mode" : "Switch to light mode"
    );
  });
}
