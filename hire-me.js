// Hire Me Page JavaScript Functionality

// Contact information
const contactInfo = {
  email: "fahadkk833@gmail.com",
  linkedin: "https://www.linkedin.com/in/fahad-ali-3a2128313/",
  github: "https://github.com/fahadware",
  resume: "https://drive.google.com/drive/folders/1KjamgNXXO_cOx3Mis_CDFXUn3AcdYycW?usp=drive_link"
};

// Function to handle contact card clicks
function openContact(type) {
    switch (type) {
        case 'email':
            window.location.href = `mailto:${contactInfo.email}?subject=Project Inquiry&body=Hi Fahad, I'm interested in discussing a project with you.`;
            break;
        case 'linkedin':
            window.open(contactInfo.linkedin, '_blank');
            break;
        case 'github':
            window.open(contactInfo.github, '_blank');
            break;
        default:
            console.log('Unknown contact type:', type);
    }
    
    // Add click animation
    const clickedCard = event.target.closest('.contact-card');
    if (clickedCard) {
        clickedCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickedCard.style.transform = '';
        }, 150);
    }
}

// Function to send email (for CTA button)
function sendEmail() {
    window.location.href = `mailto:${contactInfo.email}?subject=Project Inquiry&body=Hi Fahad, I'm interested in discussing a project with you.`;
}

// Function to download resume (for CTA button)
function downloadResume() {
    window.open(contactInfo.resume, '_blank');
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });

    // Observe skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
}

// Add particle effect to hero section
function createParticleEffect() {
    const hero = document.querySelector('.hire-hero');
    if (!hero) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(229, 9, 20, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);
}

// Add typing effect to hero title
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid #e50914';
    
    let index = 0;
    const typeSpeed = 100;
    
    function typeText() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typeSpeed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeText, 500);
}

// Add hover sound effects (optional)
function addHoverSounds() {
    const cards = document.querySelectorAll('.contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // You can add a subtle hover sound here
            // const audio = new Audio('hover-sound.mp3');
            // audio.volume = 0.1;
            // audio.play().catch(() => {}); // Ignore errors if audio fails
        });
    });
}

// Initialize page functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hire Me page loaded');
    
    // Add scroll animations
    addScrollAnimations();
    
    // Create particle effect
    createParticleEffect();
    
    // Add typing effect
    addTypingEffect();
    
    // Add hover sounds
    addHoverSounds();
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add window resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Recreate particles on resize for better distribution
    const existingParticles = document.querySelectorAll('.particle');
    existingParticles.forEach(particle => particle.remove());
    
    setTimeout(() => {
        createParticleEffect();
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('contact-card')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Export functions for potential external use
window.hireMeUtils = {
    openContact,
    contactInfo
};
