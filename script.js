// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer toutes les cartes
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Effet de clic sur le bouton contact
    const contactBtn = document.getElementById('contactBtn');
    
    contactBtn.addEventListener('click', (e) => {
        // Créer un effet de ripple
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = contactBtn.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 10) + 'px';
        ripple.style.top = (e.clientY - rect.top - 10) + 'px';
        
        contactBtn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Animation des skill tags au survol
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.animation = 'pulse 0.5s ease';
        });
        
        tag.addEventListener('animationend', () => {
            tag.style.animation = '';
        });
    });

    // Effet parallaxe sur le header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
            header.style.opacity = 1 - (scrolled / 500);
        }
    });

    // Message de confirmation au clic sur contact
    contactBtn.addEventListener('mouseenter', () => {
        console.log('Prêt à envoyer un email à Martin !');
    });
});

// Animation CSS pour le ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
            margin-left: -100px;
            margin-top: -100px;
        }
    }
`;
document.head.appendChild(style);
