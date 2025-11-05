// 1. Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  // Update button icon based on saved theme
  themeToggle.textContent = savedTheme === "dark-mode" ? "🌙" : "☀️";
} else {
  // Default to light mode
  body.classList.remove("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  // Toggle theme
  body.classList.toggle("dark-mode");

  // Save the new state
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light-mode");
    themeToggle.textContent = "☀️";
  }
});

// 2. Responsive Navbar Toggle (Burger Menu)
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// 3. Active Link on Scroll (Intersection Observer)
const sections = document.querySelectorAll("section[id]");
const navLinksAnchors = document.querySelectorAll(".nav-links a");

// Function to update active link
const setActiveLink = (id) => {
  navLinksAnchors.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // 50% of the section must be visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, observerOptions);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// 4. Set initial active link on page load
document.addEventListener("DOMContentLoaded", () => {
  if (sections.length > 0) {
    // A slight delay to ensure correct scroll position is read
    setTimeout(() => {
      let activeSection = sections[0].id;
      // Find the currently visible section on load
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 100) {
          activeSection = section.id;
        }
      }
      setActiveLink(activeSection);
    }, 100);
  }
});

// 5. Contact Form Submission (using Formspree)
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const statusButton = contactForm.querySelector("button");
  const originalButtonText = statusButton.textContent;

  statusButton.textContent = "Sending...";
  statusButton.disabled = true;

  fetch(contactForm.action, {
    method: contactForm.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch((error) => {
      alert("Oops! Something went wrong. Please check your connection.",error);
    })
    .finally(() => {
      statusButton.textContent = originalButtonText;
      statusButton.disabled = false;
    });
});
