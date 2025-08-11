// Profile Selection Handler
function selectProfile(profileType) {
    // Add visual feedback for selection
    const profileCards = document.querySelectorAll('.profile-card');
    profileCards.forEach(card => {
        card.classList.remove('selected');
    });
    
    // Find the clicked card and add selected class
    const clickedCard = event.currentTarget;
    clickedCard.classList.add('selected');
    
    // Store the selected profile in localStorage
    localStorage.setItem('selectedProfile', profileType);
    
    // Navigate to appropriate page based on profile type
    switch(profileType) {
        case 'recruiter':
            // Navigate to recruiter portfolio page with profile parameter
            window.location.href = `recruiter-profile.html?profile=${profileType}`;
            break;
        case 'developer':
            // Navigate to developer portfolio page
            window.location.href = `developer-profile.html?profile=${profileType}`;
            break;
        case 'explorer':
            // Navigate to explorer portfolio page (if exists)
            window.location.href = `explorer.html?profile=${profileType}`;
            console.log('Explorer profile selected - page not implemented yet');
            break;
        case 'stalker':
            // Navigate to stalker portfolio page (if exists)
            window.location.href = `stalker-profile.html?profile=${profileType}`;
            console.log('Stalker profile selected - page not implemented yet');
            break;
        default:
            console.log('Unknown profile type:', profileType);
    }
}

// Add click event listeners to profile cards
document.addEventListener('DOMContentLoaded', function() {
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            profileCards.forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            this.classList.add('selected');
        });
    });
    
    // Add hover effects
    profileCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}); 