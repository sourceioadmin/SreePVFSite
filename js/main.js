// main.js — sitewide interactive behavior. Waits for partials:loaded before touching header/footer DOM.

function applySiteConfig() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${cfg.phone.replace(/\s+/g, "")}`;
  });
  document.querySelectorAll("[data-phone-text]").forEach((el) => {
    el.textContent = cfg.phone;
  });
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    if (cfg.whatsapp) el.href = `https://wa.me/${cfg.whatsapp}`;
  });
  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${cfg.email}`;
  });
  document.querySelectorAll("[data-email-text]").forEach((el) => {
    el.textContent = cfg.email;
  });
  document.querySelectorAll("[data-address-text]").forEach((el) => {
    el.textContent = cfg.address;
  });
}

function markActiveNavLink() {
  const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".main-nav a.nav-link, .main-nav .dropdown-item").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === currentPage || (currentPage === "index.html" && href === "")) {
      link.classList.add("active");
    }
  });
}

// Nav items like "Research Grants", "About", and "Blog" are both a real link (their own page)
// and a dropdown-toggle (for their submenu). Bootstrap's dropdown JS always calls
// preventDefault() on a [data-bs-toggle="dropdown"] click, so clicking the link text alone never
// navigated — it only opened the submenu. Rather than race Bootstrap's own click handling (which
// runs ahead of any listener added here), this just forces the navigation directly on desktop,
// where the submenu is already reachable via the .nav-item.dropdown:hover CSS rule in
// layout.css and isn't needed on click. Left untouched on mobile/tablet, where there's no hover
// and tapping the link must still open the submenu (Awards/Media behave the same way there too).
function enableDropdownParentNavigation() {
  const links = document.querySelectorAll(
    '.main-nav .nav-item.dropdown > .nav-link.dropdown-toggle[href]:not([href="#"])'
  );
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        window.location.href = link.getAttribute("href");
      }
    });
  });
}

function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function onPartialsReady() {
  applySiteConfig();
  markActiveNavLink();
  enableDropdownParentNavigation();
  initBackToTop();
}

document.addEventListener("partials:loaded", onPartialsReady);
document.addEventListener("DOMContentLoaded", applySiteConfig);
