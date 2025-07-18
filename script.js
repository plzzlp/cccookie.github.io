document.addEventListener('DOMContentLoaded', function() {
    // Button interaction
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function() {
        alert('Button clicked! JavaScript is working.');
        
        // Change button text temporarily
        const originalText = ctaButton.textContent;
        ctaButton.textContent = 'Clicked!';
        
        setTimeout(() => {
            ctaButton.textContent = originalText;
        }, 2000);
    });
    
    // Gallery image click effect
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            this.style.border = '3px solid #e8491d';
            setTimeout(() => {
                this.style.border = 'none';
            }, 1000);
        });
    });
    
    console.log('Website loaded successfully!');
});