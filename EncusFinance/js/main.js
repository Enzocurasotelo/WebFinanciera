// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación del botón CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('formularios').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Botón del formulario anterior (ya no es necesario)
    // const formButton = document.querySelector('.form-button');
    // if (formButton) {
    //     formButton.addEventListener('click', function() {
    //         alert('Formulario de solicitud de préstamo');
    //     });
    // }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        } else {
            navbar.style.backgroundColor = '#1a1a1a';
        }
    });

    // Funcionalidad real del formulario con EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('form-message');
            formMessage.textContent = 'Enviando...';

            // EmailJS (debes reemplazar los valores por los tuyos)
            emailjs.init('TU_USER_ID'); // Reemplaza por tu userID de EmailJS
            emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
                .then(function() {
                    formMessage.textContent = '¡Consulta enviada con éxito! Nos pondremos en contacto pronto.';
                    contactForm.reset();
                }, function(error) {
                    formMessage.textContent = 'Ocurrió un error al enviar. Intenta nuevamente.';
                });
        });
    }
}); 