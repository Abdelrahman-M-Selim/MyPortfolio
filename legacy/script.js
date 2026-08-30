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

  navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinksAnchors = document.querySelectorAll(".nav-links a");

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
  threshold: 0.5, 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  if (sections.length > 0) {
    setTimeout(() => {
      let activeSection = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 100) {
          activeSection = section.id;
        }
      }
      setActiveLink(activeSection);
    }, 100);
  }
});

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

// --- 3. GSAP & ScrollTrigger Animations ---

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations (On Load)
gsap.from(".hero-content .profile-img", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.2
});

gsap.from(".hero-content h1", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out",
  delay: 0.4
});

gsap.from(".hero-content .title-role", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out",
  delay: 0.6
});

gsap.from(".hero-content .actions .btn", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  delay: 0.8
});

// Generic Section Title Animation
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  });
});

// About Section Cards
gsap.from(".about-card.left-card", {
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".about-card.right-card", {
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out"
});

// Skills Category Stagger
gsap.utils.toArray('.skills-category').forEach(category => {
  gsap.from(category.querySelectorAll('.skill-item'), {
    scrollTrigger: {
      trigger: category,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out"
  });
});

// Timeline Items (Education & Experience)
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    x: i % 2 === 0 ? -50 : 50, // Alternate left/right based on index
    opacity: 0,
    ease: "power2.out"
  });
});

// Project Cards Stagger
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  duration: 0.8,
  y: 50,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out"
});

// Certificate Items
gsap.from(".certificate-item", {
  scrollTrigger: {
    trigger: ".certificates-grid",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  duration: 0.8,
  y: 30,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

// Contact Section
gsap.from(".contact-form-container", {
  scrollTrigger: {
    trigger: ".contact-content",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".contact-info-card", {
  scrollTrigger: {
    trigger: ".contact-content",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out"
});
