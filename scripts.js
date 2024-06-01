document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const learnMoreButton = document.getElementById('learn-more');
    const contactForm = document.getElementById('contact-form');

    // Smooth scrolling
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });

            sections.forEach(section => {
                section.classList.add('hidden');
            });
            targetElement.classList.remove('hidden');
        });
    });

    // Learn more button
    learnMoreButton.addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        aboutSection.classList.remove('hidden');

        window.scrollTo({
            top: aboutSection.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    });

    // Form validation and submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
