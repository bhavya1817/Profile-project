// ==============================
// SHOW / HIDE SECTIONS
// ==============================

// Collect all nav links and sections
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// Function to hide all sections
function hideAllSections() {
  sections.forEach(sec => sec.style.display = 'none');
}

// Function to show one section by ID
function showSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add click event to nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Get the section ID (remove the '#')
    const id = link.getAttribute('href').substring(1);

    // Hide all and show only that section
    hideAllSections();
    showSection(id);
  });
});

// Show Home section by default
hideAllSections();
showSection('home');

// ==============================
// FOOTER YEAR
// ==============================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==============================
// MOBILE MENU TOGGLE
// ==============================
const navToggle = document.getElementById("navToggle");
const navLinksContainer = document.getElementById("navLinks");

if (navToggle && navLinksContainer) {
  navToggle.addEventListener("click", () => {
    const isShown = navLinksContainer.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isShown));
  });

  // Close menu on link click (mobile)
  navLinksContainer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinksContainer.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
