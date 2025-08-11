// Fullstack x AI Projects JavaScript Functionality

// Simple page functionality
function addPageInteractions() {
    console.log('Fullstack x AI Projects page loaded');
}

// Add loading animation
function addLoadingAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Fullstack x AI Projects page loaded');
    
    // Add loading animation
    addLoadingAnimation();
    
    // Add page interactions
    addPageInteractions();

    // Netflix-inspired dropdown filter: toggle + navigate
    const filterTrigger = document.getElementById('filterTrigger');
    const filterMenu = document.getElementById('filterMenu');
    if (filterTrigger && filterMenu) {
        const toggleMenu = (open) => {
            const isOpen = open ?? !filterMenu.classList.contains('open');
            filterMenu.classList.toggle('open', isOpen);
            filterTrigger.setAttribute('aria-expanded', String(isOpen));
        };

        filterTrigger.addEventListener('click', () => toggleMenu());

        filterMenu.addEventListener('click', (event) => {
            const item = event.target.closest('.filter-menu-item');
            if (!item) return;
            const key = item.getAttribute('data-target');
            if (key === 'university') {
                window.location.href = 'university-projects.html';
            }
        });

        // Close on outside click or Esc
        document.addEventListener('click', (e) => {
            if (!filterMenu.contains(e.target) && !filterTrigger.contains(e.target)) {
                toggleMenu(false);
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleMenu(false);
        });
    }
});

// Export functions for potential external use
window.fullstackAIProjects = {
    addPageInteractions
};
