document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Active state toggle
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 80;
    document.querySelectorAll('section').forEach(section => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#mainCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 4000, // Auto-slide every 4 seconds
        pause: 'hover', // Pause on hover
        ride: 'carousel', // Start immediately
    });
});
