// University Projects Data and Functionality

// Sample University Projects Data
const universityProjects = [
  {
    id: 1,
    name: "Bus Booking System",
    subject: "programming fundamentals",
    description:
      "A C++ console-based OOP project for bus bookings. Feature include class inheritance, file handling, user authentication throgh OTP, and ticket management. across different citites in Pakistan",
    image:
      "https://imgs.search.brave.com/aPcOp7fycMthfrc2jOakXATw9GAPclYchBnFyKKABuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zY2hv/b2xwYXNzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9tb3ZpbmdfYnVz/LWUxNjU2MDkyNzcy/ODQ2LmpwZw",
    technologies: ["C++"],
    github: "https://github.com/fahadware/Bus-Booking-System",

    stats: {
      lines: "4.5K",
      commits: "45",
      duration: "1 Week",
    },
  },
  {
    id: 2,
    name: "Airport Management System",
    subject: "Object Oriented Programming",
    description:
      "A console-based Airport Management System in C++ that manages flights, handles both airport and airline employees, displays maps, and manages flight bookings.",
    image:
      "https://imgs.search.brave.com/x4VCbVtPp1cdh2fUX7OEQS-URJjkBkX5vP50KLvJ3D0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNh/LmFlcm8vd3AtY29u/dGVudC90aGVtZXMv/dGhlbWUtcmVzYS9p/bWFnZXMvbW9udGFn/ZS1hdmlvbnMud2Vi/cA",
    technologies: ["C++"],
    github: "https://github.com/fahadware/OOP-Projeect",

    stats: {
      lines: "4.5K",
      commits: "15",
      duration: "2 Weeks",
    },
  },
  {
    id: 3,
    name: "Game Box",
    subject: "Data Structure",
    description:
      "A comprehensive console-based gaming platform featuring multiple classic games including Minesweeper, Head & Tail coin flip, and Snake & Ladder. Built using data structures.",
    image:
      "https://imgs.search.brave.com/hHFQcK-J4P0P3-q7O_QCRNCGA07H0FrSdow8O5hbcjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJkYm9hcmQt/Ym94LXdpdGgtdmlk/ZW8tY2Fzc2V0dGVz/LWdhbWVwYWQtd2hp/dGUtYW50aXF1ZXMt/dHJhc2hfMTc1Njgy/LTExMTY1LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA",
    technologies: ["C++ "],
    github: "https://github.com/fahadware/Data-Structure-Project",

    stats: {
      lines: "2.1K",
      commits: "22",
      duration: "1 Week",
    },
  },
];


// Function to create project card HTML
function createProjectCard(project) {
    // Ensure all required properties exist
    if (!project.github) {
        console.warn(`Project "${project.name}" missing github property`);
        project.github = "https://github.com/fahadware/OOP-Projeect";
    }
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag ${tech.toLowerCase().replace(/[^a-z0-9]/g, '')}">${tech}</span>`
    ).join('');

    return `
        <div class="project-card loading" data-id="${project.id}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}" loading="lazy">
                <div class="project-badge">University</div>
            </div>
            <div class="project-info">
                <h3 class="project-name">${project.name}</h3>
                <div class="project-subject">${project.subject}</div>
                <p class="project-description">${project.description}</p>
                
                <div class="project-stats">
                    <div class="stat-item">
                        <span class="stat-value">${project.stats.lines}</span>
                        <span class="stat-label">Lines</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${project.stats.commits}</span>
                        <span class="stat-label">Commits</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${project.stats.duration}</span>
                        <span class="stat-label">Duration</span>
                    </div>
                </div>
                
                <div class="project-technologies">
                    <span class="tech-label">Technologies:</span>
                    <div class="tech-tags">
                        ${techTags}
                    </div>
                </div>
                
                <div class="project-actions">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn btn-github">
                        <i class="fab fa-github"></i>
                        View Code
                    </a>
                    <button class="project-btn btn-favourite" onclick="toggleFavourite(${project.id})" data-project-id="${project.id}">
                        <i class="far fa-heart"></i>
                        Favourite
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to render all projects with smooth pan-in animation
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) {
        console.error('Projects grid element not found!');
        return;
    }

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Create all cards first (hidden)
    const cardElements = [];
    universityProjects.forEach((project, index) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = createProjectCard(project);
        const card = tempDiv.firstElementChild;
        
        // Remove loading class and keep cards hidden initially
        card.classList.remove('loading');
        
        // Add to grid
        projectsGrid.appendChild(card);
        cardElements.push(card);
    });

    // Animate cards one by one with staggered timing
    cardElements.forEach((card, index) => {
        setTimeout(() => {
            // Force reflow to ensure the animation triggers properly
            void card.offsetWidth;
            
            // Add pan-animate class for smooth left-to-right animation
            card.classList.add('pan-animate');
            
            // Add a subtle bounce effect on completion
            setTimeout(() => {
                card.style.transform = 'translateX(0) scale(1.01)';
                card.style.filter = 'brightness(1.05)';
                setTimeout(() => {
                    card.style.transform = 'translateX(0) scale(1)';
                    card.style.filter = 'brightness(1)';
                }, 150);
            }, 700); // After the enhanced pan animation completes
            
        }, index * getAnimationDelay()); // Dynamic delay based on device
    });
}

// Function to handle image loading errors
function handleImageErrors() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik0xMjAgOTBMMTgwIDIxMEwyODAgOTBIMzIwVjIxMEgzMjBWOTBIMzIwVjIxMEgzMjBWOTBIMzIwVjIxMEgzMjBWOTBIMzIwVjIxMEgzMjAiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPlByb2plY3QgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
        }
    }, true);
}

// Function to add mobile optimizations for enhanced pan animation
function addMobileOptimizations() {
    // Adjust animation timing based on screen size
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    if (isSmallMobile || isMobile) {
        // Create optimized styles for mobile
        const style = document.createElement('style');
        style.textContent = `
            .project-card {
                transition-duration: ${isSmallMobile ? '0.4s' : '0.5s'} !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to get optimal animation delay based on device
function getAnimationDelay() {
    if (window.innerWidth <= 480) return 180; // Optimized for small mobile
    if (window.innerWidth <= 768) return 200; // Medium speed on tablets
    return 220; // Enhanced timing on desktop for smoother effect
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - University Projects');
    
    // Render all projects with pan animation
    renderProjects();
    
    // Initialize favourite states
    setTimeout(() => {
        initializeFavourites();
    }, 1000);
    
    // Handle image loading errors
    handleImageErrors();
    
    // Add mobile optimizations
    addMobileOptimizations();
    
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
            if (key === 'fullstack-ai') {
                window.location.href = 'fullstack-ai-projects.html';
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



// Favourite projects functionality
let favouriteProjects = JSON.parse(localStorage.getItem('favouriteProjects')) || [];

// Function to toggle favourite status
function toggleFavourite(projectId) {
    const button = document.querySelector(`[data-project-id="${projectId}"]`);
    const icon = button.querySelector('i');
    const project = universityProjects.find(p => p.id === projectId);
    
    if (!button || !project) return;
    
    const isFavourited = favouriteProjects.includes(projectId);
    
    if (isFavourited) {
        // Remove from favourites
        favouriteProjects = favouriteProjects.filter(id => id !== projectId);
        icon.className = 'far fa-heart';
        button.classList.remove('favourited');
        
        // Show notification
        showNotification(`Removed "${project.name}" from favourites`, 'remove');
    } else {
        // Add to favourites
        favouriteProjects.push(projectId);
        icon.className = 'fas fa-heart';
        button.classList.add('favourited');
        
        // Show notification
        showNotification(`Added "${project.name}" to favourites`, 'add');
    }
    
    // Save to localStorage
    localStorage.setItem('favouriteProjects', JSON.stringify(favouriteProjects));
    
    // Add animation effect
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// Function to show notification
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.favourite-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `favourite-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-heart"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Function to initialize favourite states on page load
function initializeFavourites() {
    favouriteProjects.forEach(projectId => {
        const button = document.querySelector(`[data-project-id="${projectId}"]`);
        if (button) {
            const icon = button.querySelector('i');
            icon.className = 'fas fa-heart';
            button.classList.add('favourited');
        }
    });
}
