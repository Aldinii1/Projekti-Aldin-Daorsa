document.querySelectorAll('.reserve-btn').forEach(button => {
    button.addEventListener('click', () => {
        const date = prompt('Enter your reservation date (YYYY-MM-DD):');
        if (date) {
            alert(`Your reservation for ${date} is confirmed!`);
        } else {
            alert('Reservation canceled.');
        }
    });
});

document.getElementById('Menu').addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (email && message) {
        alert('Thank you for contacting us! We will respond shortly.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
