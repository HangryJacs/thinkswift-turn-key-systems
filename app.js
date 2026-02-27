/* ============================================
   ThinkSwift Landing Page — Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll-triggered fade-in animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // --- Navbar Slide Up/Down on Scroll ---
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (!navbar) return;

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            navbar.classList.add('nav-hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });


    // --- Form handling ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Disable and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.style.opacity = '0.7';

            // Simulate submission (replace with actual endpoint)
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Thanks! We\'ll be in touch.';
                submitBtn.style.background = '#1571D3';
                submitBtn.style.boxShadow = '0 4px 16px rgba(21, 113, 211, 0.3)';

                // Reset after delay
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    submitBtn.style.boxShadow = '';
                }, 3000);
            }, 1200);
        });
    }

});
