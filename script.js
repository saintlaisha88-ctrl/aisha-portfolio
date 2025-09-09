document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent default form submission for now
    event.preventDefault();

    // Display the confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    // Optionally, hide the form after submission
    document.getElementById('contact-form').style.display = 'none';
    
    // This is where a real form submission would occur.
    // For Formspree, the form action handles it automatically.
});