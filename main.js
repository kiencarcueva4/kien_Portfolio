// Smooth scrolling for navigation links and buttons
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.2
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted with data:', data);
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Initialize skill level indicators
document.querySelectorAll('.skill').forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.setProperty('--skill-level', `${level}%`);
});

// Set active navigation based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', setActiveNav);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking a link (for mobile)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('show');
            }
        });
    });
}

// Prevent zooming on double-tap (for mobile)
document.addEventListener('dblclick', (e) => {
    e.preventDefault();
}, { passive: false });

// Make sure buttons have proper touch feedback
document.querySelectorAll('a, button').forEach(element => {
    element.style.webkitTapHighlightColor = 'rgba(100, 108, 255, 0.3)';
    element.addEventListener('touchstart', () => {
        element.style.transform = 'scale(0.98)';
    });
    element.addEventListener('touchend', () => {
        element.style.transform = 'scale(1)';
    });
});