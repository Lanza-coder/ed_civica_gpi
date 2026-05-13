// ====================================
// NAVIGAZIONE E MENU
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle menu mobile
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Chiudi menu quando clicchi su un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll con offset per navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Evidenzia il link attivo durante lo scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.content-section, #home, #contesto, #tecnologia, #danni, #risposta, #conclusioni');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // Effetto navbar su scroll
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 58, 82, 0.99)';
        } else {
            navbar.style.background = 'rgba(26, 58, 82, 0.95)';
        }
    });
});

// ====================================
// ANIMAZIONI AL SCROLL
// ====================================

// Intersection Observer per animazioni
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Osserva tutti gli elementi che devono animarsi
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.index-card, .tech-card, .stat-card, .response-card, .conclusion-card, .info-box'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ====================================
// EFFETTI SUGLI HOVER DEGLI ELEMENTI
// ====================================

// Aggiungi effetto parallax leggero ai background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrollPosition = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ====================================
// STATISTICHE CON CONTATORE ANIMATO
// ====================================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const startTime = Date.now();
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(progress * target);
        element.textContent = current.toLocaleString('it-IT');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString('it-IT');
        }
    };
    
    update();
};

// Avvia contatori quando entrano in viewport
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('counted')) {
                const number = parseInt(statNumber.textContent.replace(/\D/g, ''));
                if (number) {
                    animateCounter(statNumber, number);
                    statNumber.classList.add('counted');
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => statsObserver.observe(card));
});

// ====================================
// EFFETTI INTERATTIVI
// ====================================

// Aggiungi effetto glow ai button al hover
const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--x', x + 'px');
        button.style.setProperty('--y', y + 'px');
    });
});

// ====================================
// RESPONSIVE MENU
// ====================================

// Aggiungi stili CSS dinamicamente per il menu mobile
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(26, 58, 82, 0.98);
            flex-direction: column;
            padding: var(--spacing-lg);
            gap: var(--spacing-lg);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translateY(8px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translateY(-8px);
        }
    }
    
    .nav-link.active {
        color: white;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
    
    .index-card:nth-child(1) { animation-delay: 0.1s; }
    .index-card:nth-child(2) { animation-delay: 0.2s; }
    .index-card:nth-child(3) { animation-delay: 0.3s; }
    .index-card:nth-child(4) { animation-delay: 0.4s; }
    .index-card:nth-child(5) { animation-delay: 0.5s; }
`;
document.head.appendChild(style);

// ====================================
// RILEVAMENTO POSIZIONE UTENTE
// ====================================

// Mostra/nascondi navbar su scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ====================================
// SMOOTH SCROLL BEHAVIOR
// ====================================

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

// ====================================
// UTILITIES
// ====================================

// Funzione per aggiungere classe quando elemento entra in viewport
const addClassOnScroll = (selector, className, threshold = 0.5) => {
    const elements = document.querySelectorAll(selector);
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, { threshold });
    
    elements.forEach(el => elementObserver.observe(el));
};

// Smooth scroll per tutti i link interni
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', smoothScroll);

// ====================================
// ANALYTICS E TRACKING
// ====================================

// Traccia gli scroll per sezione (opzionale per analytics)
const trackSectionViews = () => {
    const sections = document.querySelectorAll('[id^=""]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Qui puoi aggiungere tracking (es. GA event)
                console.log(`Sezione visualizzata: ${entry.target.id}`);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
};

document.addEventListener('DOMContentLoaded', trackSectionViews);

console.log('Script caricato con successo - Sito Terremoto Turchia-Siria 2023');
