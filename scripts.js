document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const learnMoreButton = document.getElementById('learn-more');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

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

    // Form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        fetch(contactForm.getAttribute('action'), {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                formStatus.textContent = "Message sent successfully!";
                formStatus.classList.add('success');
                contactForm.reset();
            } else {
                formStatus.textContent = "An error occurred. Please try again later.";
                formStatus.classList.add('error');
            }
        })
        .catch(error => {
            formStatus.textContent = "An error occurred. Please try again later.";
            formStatus.classList.add('error');
        });
    });
});
