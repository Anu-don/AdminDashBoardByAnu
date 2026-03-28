const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;
const sidebarBtn = document.getElementById("ToggleSidebar");
const sidebar = document.getElementById("sidebar");
const dashbord = document.querySelector(".dashboard");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
  dashbord.classList.toggle("hide");

  if (sidebar.classList.contains("hide")) {
    sidebarBtn.innerHTML = "&gt;";

  }else{
    sidebarBtn.innerHTML = "&lt;";
  }
})

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "dark") {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});

// if using Mobile 
window.addEventListener("load", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("hide");
    sidebarBtn.innerHTML = "&gt;";
  }
});
