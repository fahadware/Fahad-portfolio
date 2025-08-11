// Intro Animation Controller
class IntroAnimation {
    constructor() {
        this.letters = document.querySelectorAll('.letter');
        this.getStartedBtn = document.getElementById('getStartedBtn');
        this.netflixSound = document.getElementById('netflixSound');
        this.currentLetterIndex = 0;
        this.animationComplete = false;
        
        this.init();
    }
    
    init() {
        // Start the letter animation sequence
        this.animateLetters();
        
        // Add click event to the button
        this.getStartedBtn.addEventListener('click', () => {
            this.handleGetStartedClick();
        });
    }
    
    // Animate letters appearing one by one
    animateLetters() {
        if (this.currentLetterIndex < this.letters.length) {
            const letter = this.letters[this.currentLetterIndex];
            
            // Skip space characters but still count them
            if (letter.classList.contains('space')) {
                this.currentLetterIndex++;
                setTimeout(() => this.animateLetters(), 100);
                return;
            }
            
            // Add visible class to trigger animation
            letter.classList.add('visible');
            
            this.currentLetterIndex++;
            
            // Continue with next letter after delay
            setTimeout(() => this.animateLetters(), 200);
        } else {
            // All letters have appeared, trigger distortion effect
            setTimeout(() => this.triggerDistortionEffect(), 500);
        }
    }
    

    
    // Trigger Netflix-style distortion effect
    triggerDistortionEffect() {
        this.letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('distort');
            }, index * 50);
        });
        
        // Show get started button after distortion
        setTimeout(() => {
            this.showGetStartedButton();
        }, 1000);
    }
    
    // Show the get started button
    showGetStartedButton() {
        this.getStartedBtn.classList.add('visible');
        this.animationComplete = true;
    }
    
    // Handle get started button click
    async handleGetStartedClick() {
        if (!this.animationComplete) return;
        
        // Play Netflix sound
        await this.playNetflixSound();
        
        // Trigger letter fade-out effect
        this.fadeOutLetters();
        
        // Fade out button
        this.getStartedBtn.classList.add('fade-out');
        
        // Transition to main page
        setTimeout(() => {
            this.transitionToMainPage();
        }, 1500);
    }
    
    // Play Netflix intro sound
    async playNetflixSound() {
        try {
            this.netflixSound.currentTime = 0;
            await this.netflixSound.play();
        } catch (error) {
            // Audio playback failed, do nothing
        }
    }
    
    // Fade out letters like Netflix logo
    fadeOutLetters() {
        this.letters.forEach((letter, index) => {
            // Add fade-out class with staggered delay
            setTimeout(() => {
                letter.classList.add('fade-out');
            }, index * 80);
        });
    }
    
    // Transition to main portfolio page
    transitionToMainPage() {
        // Create transition overlay
        const overlay = document.createElement('div');
        overlay.className = 'transition-overlay';
        document.body.appendChild(overlay);
        
        // Activate overlay
        setTimeout(() => {
            overlay.classList.add('active');
        }, 100);
        
        // Navigate to main page
        setTimeout(() => {
            window.location.href = 'profilepage.html';
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new IntroAnimation();
});
