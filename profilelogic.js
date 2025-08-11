// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hero section video sound on hover
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");
  const heroVideo = document.querySelector(".hero-image");

  if (heroSection && heroVideo) {
    heroSection.addEventListener("mouseenter", function () {
      heroVideo.muted = false;
    });

    heroSection.addEventListener("mouseleave", function () {
      heroVideo.muted = true;
    });
  }
});

// Mobile Navigation Functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
  const mobileCloseBtn = document.querySelector(".mobile-close-btn");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

  // Open mobile navigation
  hamburgerMenu.addEventListener("click", function () {
    mobileNavOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });

  // Close mobile navigation
  function closeMobileNav() {
    mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  mobileCloseBtn.addEventListener("click", closeMobileNav);

  // Close mobile navigation when clicking on a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  // Close mobile navigation when clicking outside the content
  mobileNavOverlay.addEventListener("click", function (e) {
    if (e.target === mobileNavOverlay) {
      closeMobileNav();
    }
  });

  // Close mobile navigation on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNavOverlay.classList.contains("active")) {
      closeMobileNav();
    }
  });
});

// Card hover effects
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".content-card");
  cards.forEach((card, i) => {
    card.classList.remove("pan-in-right"); // Reset if needed
    setTimeout(() => {
      card.classList.add("pan-in-right");
    }, 180 * i); // 150ms stagger
  });

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
    });

    // Add click functionality for cards
    card.addEventListener("click", function () {
      const cardTitle = this.querySelector(".centered-title").textContent;
      console.log(`Clicked on: ${cardTitle}`);
      
      // Handle specific card clicks
      if (cardTitle === "Blogs") {
        window.location.href = "Blog.html";
      }
      else if (cardTitle === "Skills") {
        window.location.href = "skills.html";
      }
      else if (cardTitle === "University Projects" || cardTitle === "Projects") {
        window.location.href = "university-projects.html";
      }
      else if (cardTitle === "Engineering Map") {
        window.location.href = "engineering-map.html";
      }
      else if (cardTitle === "Design Originals") {
        window.location.href = "design-projects.html";
      }
      else if (cardTitle === "Fullstack x AI Project") {
        window.location.href = "fullstack-ai-projects.html";
      }
      else if (cardTitle === "Fullstack x AI Project") {
        window.location.href = "fullstack-ai-projects.html";

      } else if (cardTitle === "Contact Me") {
        window.location.href = "hire-me.html";
      }
      
     

    });
  });

  // Resume button functionality
  const resumeBtn = document.querySelector(".btn-play");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
      const resumeUrl =
        "https://drive.google.com/drive/folders/1KjamgNXXO_cOx3Mis_CDFXUn3AcdYycW?usp=drive_link";
      const resumeWindow = window.open(resumeUrl, `noopener,noreferrer`)
      
      if (resumeWindow) {
        resumeWindow.focus();
        console.log("Resume button clicked");
      } else {
        console.error("Failed to open resume");
        
        window.location.href = resumeUrl;
      }
     
    });
  }

  // LinkedIn button functionality
  const linkedinBtn = document.querySelector(".btn-info");
  if (linkedinBtn) {
    linkedinBtn.addEventListener("click", function () {
      // Secure LinkedIn profile link - replace with your actual LinkedIn profile URL
      const linkedinProfileUrl =
        "https://www.linkedin.com/in/fahad-ali-3a2128313/";
      
      // Open LinkedIn profile in a new tab with security attributes
      const linkedinWindow = window.open(linkedinProfileUrl,  'noopener,noreferrer');
      
      // Additional security: ensure the window opened successfully
      if (linkedinWindow) {
        linkedinWindow.focus();
        console.log("LinkedIn profile opened securely");
      } else {
        console.error("Failed to open LinkedIn profile - popup may be blocked");
        // Fallback: try to open in same window if popup is blocked
        window.location.href = linkedinProfileUrl;
      }
    });
  }

  // Play/pause video on Skills card hover
  if (cards[1]) {
    // 2nd card is Skills
    const video = cards[1].querySelector("video");
    if (video) {
      cards[1].addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.play();
      });
      cards[1].addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
