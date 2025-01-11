document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

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
        interval: 4000,
        pause: 'hover',
        ride: 'carousel', 
    });
});


document.addEventListener('DOMContentLoaded', () => {
    
    const reserveButtons = document.querySelectorAll('.btn-warning');
    reserveButtons.forEach(button => {
        button.addEventListener('click', () => {
         
            const reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));
            reservationModal.show();
        });
    });


    const submitFoodIdeasButton = document.getElementById('submitFoodIdeas');
    submitFoodIdeasButton.addEventListener('click', () => {
        const foodIdeas = document.getElementById('foodIdeas').value.trim();
        
        if (foodIdeas) {
            alert('Thank you for sharing your food ideas! We will take them into account.');
        } else {
            alert('Please provide your food ideas.');
        }

     
        const reservationModal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
        reservationModal.hide();
    });

  
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();  
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email) {
                const newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'));
                newsletterModal.show();
            } else {
                alert('Please enter a valid email address.');
            }

            emailInput.value = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Reserve Now Button Click Handler
    const reserveButtons = document.querySelectorAll('.btn-warning');
    reserveButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show the reservation confirmation message
            alert('You\'ve reserved the place. We hope you can attend this day!');

            // After the alert, ask for food ideas
            const foodIdeas = prompt('We would love to hear your food ideas. Please share any suggestions you have:');
            
            if (foodIdeas) {
                alert('Thank you for sharing your food ideas! We will take them into account.');
            }
        });
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();  
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email) {
                alert('We\'ve received your email. Thank you!');
            } else {
                alert('Please enter a valid email address.');
            }

            // Clear the input field after submission
            emailInput.value = '';
        });
    }
});
