// Profile Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileSwitcher = document.getElementById('profileSwitcher');
    const profileDropdownMenu = document.getElementById('profileDropdownMenu');
    const profileDropdownOverlay = document.getElementById('profileDropdownOverlay');
    const profileDropdownItems = document.querySelectorAll('.profile-dropdown-item');

    // Toggle dropdown menu
    profileSwitcher.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Close dropdown when clicking overlay
    profileDropdownOverlay.addEventListener('click', function() {
        closeDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileSwitcher.contains(e.target) && !profileDropdownMenu.contains(e.target)) {
            closeDropdown();
        }
    });

    // Handle profile switching
    profileDropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetPage = this.getAttribute('data-page');
            const profileName = this.querySelector('.profile-dropdown-item-name').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Navigate to the selected profile page
            if (targetPage && targetPage !== window.location.pathname.split('/').pop()) {
                // Add transition effect before navigation
                document.body.style.opacity = '0';
                document.body.style.transform = 'scale(0.95)';
                document.body.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 300);
            } else {
                closeDropdown();
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDropdown();
        }
    });

    function toggleDropdown() {
        const isActive = profileDropdownMenu.classList.contains('active');
        
        if (isActive) {
            closeDropdown();
        } else {
            openDropdown();
        }
    }

    function openDropdown() {
        profileDropdownMenu.classList.add('active');
        profileDropdownOverlay.classList.add('active');
        
        // Add entrance animation for dropdown items
        profileDropdownItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });

        // Rotate chevron icon
        const chevronIcon = profileSwitcher.querySelector('.profile-switcher-icon');
        chevronIcon.style.transform = 'rotate(180deg)';
    }

    function closeDropdown() {
        profileDropdownMenu.classList.remove('active');
        profileDropdownOverlay.classList.remove('active');
        
        // Reset dropdown items
        profileDropdownItems.forEach(item => {
            item.style.opacity = '';
            item.style.transform = '';
            item.style.transition = '';
        });

        // Reset chevron icon
        const chevronIcon = profileSwitcher.querySelector('.profile-switcher-icon');
        chevronIcon.style.transform = 'rotate(0deg)';
    }

    // Add hover effects for profile switcher button
    profileSwitcher.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    profileSwitcher.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Add hover effects for dropdown items
    profileDropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(4px)';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });

    // Initialize page transition effect
    document.body.style.opacity = '1';
    document.body.style.transform = 'scale(1)';
    document.body.style.transition = 'all 0.3s ease';
});
