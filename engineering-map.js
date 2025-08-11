// Engineering Map JavaScript Functionality

// Skills progress data - static display only
const skillsData = {
    // Programming Fundamentals - Completed
    'c': { name: 'C Programming', completed: true },
    'cpp': { name: 'C++', completed: true },
    'oop': { name: 'OOP', completed: true },
    
    // Computer Science Core - Completed
    'ds': { name: 'Data Structures', completed: true },
    'algorithms': { name: 'Algorithms', completed: true },
    'database': { name: 'Database Systems', completed: false },
    'os': { name: 'Operating Systems', completed: false },
    
    // Design - Completed
    'uiux': { name: 'UI/UX Design', completed: true },
    'webdesign': { name: 'Web Design', completed: true },
    
    // Frontend Development - Completed
    'html': { name: 'HTML', completed: true },
    'css': { name: 'CSS', completed: true },
    'tailwind': { name: 'Tailwind CSS', completed: true },
    'react': { name: 'React', completed: true },
    
    // Backend Development - Pending
    'nodejs': { name: 'Node.js', completed: false },
    'express': { name: 'Express.js', completed: false },
    'restapi': { name: 'RESTful APIs', completed: false },
    'mongodb': { name: 'MongoDB', completed: false },
    
    // DevOps - Pending
    'docker': { name: 'Docker', completed: false },
    'cicd': { name: 'CI/CD Pipelines', completed: false },
    'deployment': { name: 'Deployment', completed: false },
    
    // AI - Pending
    'ai': { name: 'AI Integration', completed: false }
};

// Animate counter with counting effect
function animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = targetValue;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Update progress counters with animation
function updateProgressCounters() {
    const totalSkills = Object.keys(skillsData).length;
    const completedSkills = Object.values(skillsData).filter(skill => skill.completed).length;
    const pendingSkills = totalSkills - completedSkills;
    
    // Animate counters with staggered timing
    setTimeout(() => animateCounter('totalCount', totalSkills, 1500), 200);
    setTimeout(() => animateCounter('completedCount', completedSkills, 1500), 400);
    setTimeout(() => animateCounter('pendingCount', pendingSkills, 1500), 600);
}

// Initialize skill states based on data
function initializeSkills() {
    Object.keys(skillsData).forEach(skillId => {
        const element = document.querySelector(`[data-skill="${skillId}"]`);
        if (element) {
            const skill = skillsData[skillId];
            const statusIcon = element.querySelector('.skill-status i');
            
            if (skill.completed) {
                element.classList.remove('pending');
                element.classList.add('completed');
                statusIcon.className = 'fas fa-check-circle';
            } else {
                element.classList.remove('completed');
                element.classList.add('pending');
                statusIcon.className = 'fas fa-clock';
            }
        }
    });
}

// Add scroll animations for skill categories
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

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach(category => {
        category.style.animationPlayState = 'paused';
        observer.observe(category);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Engineering Map loaded');
    
    // Initialize skill states
    initializeSkills();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Start counter animations after a short delay
    setTimeout(() => {
        updateProgressCounters();
    }, 500);
});
