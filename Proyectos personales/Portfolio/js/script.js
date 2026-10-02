const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const dialog = document.querySelector(".project-dialog");
const toast = document.querySelector(".toast");
let toastTimer;

function setTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
  themeToggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#1b1d1a" : "#f5f4ef";
}

let savedTheme;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
  console.warn("No se pudo leer la preferencia de tema.", error);
}
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {
    console.warn("No se pudo guardar la preferencia de tema.", error);
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    navLinks.classList.remove("is-open");
  }
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "todos" && card.dataset.category !== filter;
    });
  });
});

const projects = {
  luma: {
    title: "Luma",
    category: "Producto digital · Bienestar",
    description: "Una app de microdescansos diseñada para ayudarte a bajar el ritmo. Una experiencia cálida y sin presión que convierte pequeñas pausas en un hábito posible.",
    services: "Estrategia · UX/UI · Prototipo",
  },
  sur: {
    title: "Sur",
    category: "Identidad visual · Hogar",
    description: "Una identidad para una marca de objetos cotidianos que apuesta por materiales honestos y una vida menos acelerada. Simple, táctil y pensada para durar.",
    services: "Estrategia · Naming · Identidad",
  },
  "casa-norte": {
    title: "Casa Norte",
    category: "Diseño web · Arquitectura",
    description: "Un sitio editorial para un estudio de arquitectura. Tipografía expresiva y espacios generosos ponen el foco en sus proyectos y en cómo se viven.",
    services: "Dirección de arte · Diseño web · Desarrollo",
  },
  marea: {
    title: "Marea",
    category: "Producto digital · Alimentación",
    description: "Una experiencia digital para descubrir productores locales y comer de temporada. Marea hace que elegir ingredientes frescos sea fácil y apetecible.",
    services: "Estrategia · UX/UI · Prototipo",
  },
};

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    dialog.querySelector(".dialog-category").textContent = project.category;
    dialog.querySelector("#dialog-title").textContent = project.title;
    dialog.querySelector(".dialog-description").textContent = project.description;
    dialog.querySelector(".dialog-services").textContent = project.services;
    dialog.showModal();
  });
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

document.querySelector(".copy-email").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.email);
    showToast("Email copiado al portapapeles");
  } catch (error) {
    console.error("No se pudo copiar el email.", error);
    showToast("No se pudo copiar. Usa el enlace de email.");
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
