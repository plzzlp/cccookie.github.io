document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const gallery = document.querySelector('.gallery');
    const videoGrid = document.querySelector('.video-grid');

    // Sample media data (replace with your actual files)
    const photoData = [
        { src: 'photos/logo.png', title: 'အံ့သြစရာပါ', description: '‌‌ေဂါင်ကြီးတို့' }
        
    ];

    const videoData = [
        { src: 'videos/Facebook_1744376450456(720p).mp4', title: 'သွားပြောလို့ပါးချခံရရင်တာဝန်မယူဘူး
ဒီနေ့မအားလို့ဒီလောက်နဲ့ကျေနပ်လိုက်ပါ
ဒီလောက်ဆိုရင်ခေါင်းရီးတို့Channel Joinဖို့လုံလောက်နေပီ', description: 'https://t.me/marcustbyyakuzarsensei' }
        
    ];

    // Load photos dynamically
    function loadPhotos() {
        gallery.innerHTML = '';
        photoData.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'gallery-item';
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>${photo.title}</h3>
                    <p>${photo.description}</p>
                </div>
            `;
            gallery.appendChild(photoItem);
        });
    }

    // Load videos dynamically
    function loadVideos() {
        videoGrid.innerHTML = '';
        videoData.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-card';
            videoItem.innerHTML = `
                <video class="video-player" controls>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            `;
            videoGrid.appendChild(videoItem);
        });
    }

    // Toggle Drawer
    menuBtn.addEventListener('click', function() {
        drawer.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // Navigation between sections
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Get the content to show
            const contentToShow = this.getAttribute('data-content');
            
            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Show the selected content section
            document.getElementById(contentToShow).classList.add('active');
            
            // Load content if needed
            if (contentToShow === 'photos') {
                loadPhotos();
            } else if (contentToShow === 'videos') {
                loadVideos();
            }
            
            // Close drawer on mobile
            if (window.innerWidth < 768) {
                closeDrawer();
            }
        });
    });

    // Initialize the first content section as active
    document.querySelector('.nav-item.active').click();
});
