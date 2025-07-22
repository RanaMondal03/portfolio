// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle menu when burger is clicked
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && 
            !navLinks.contains(e.target) && 
            navLinks.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add some interactive particles
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        width: 4px;
        height: 4px;
        background: rgba(99, 102, 241, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 6s linear infinite;
    `;

    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 6 + 's';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// --- Back to Top Button Logic ---
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    // Show button when user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) { // Show after 400px of scrolling
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
}
