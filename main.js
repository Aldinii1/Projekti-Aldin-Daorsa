document.querySelectorAll('.reserve-btn').forEach((button) => {
    button.addEventListener('click', function () {
        const eventName = this.previousElementSibling.previousElementSibling.textContent.trim();
        Swal.fire({
            title: 'Reservation Sent!',
            html: `<p>Ne ju kemi dërguar me email planin e rezervimit <strong>${eventName}</strong>.</p><p>Ju lutemi konfirmoni sa më shpejt që të jetë e mundur..</p>`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#f39c12'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    Swal.fire({
        title: 'Thank You!',
        text: 'Thank you for the idea. We will get back to you shortly.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f39c12'
    });
    this.reset();
});
