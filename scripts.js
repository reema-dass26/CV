document.addEventListener("DOMContentLoaded", function() {
    const toggleAboutButton = document.getElementById('toggle-about');
    const aboutSection = document.getElementById('about');

    toggleAboutButton.addEventListener('click', function() {
        if (aboutSection.classList.contains('hidden')) {
            aboutSection.classList.remove('hidden');
        } else {
            aboutSection.classList.add('hidden');
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        alert(`Thank you, ${name}! Your message: "${message}" has been received.`);
        contactForm.reset();
    });
});
