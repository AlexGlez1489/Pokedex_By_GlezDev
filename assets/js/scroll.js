document.addEventListener('DOMContentLoaded', function () {
    // Inicializa ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '15px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.up', { origin: 'top' });
    ScrollReveal().reveal('.down', { origin: 'bottom' });
    ScrollReveal().reveal('.left', { origin: 'left' });
    ScrollReveal().reveal('.right', { origin: 'right' });

});