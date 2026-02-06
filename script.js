/* ==========================================
   🎯 PORTFOLIO JAVASCRIPT
   ========================================== */

// ==========================================
// SMOOTH SCROLLING
// ==========================================
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

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Áp dụng animation cho các elements
document.querySelectorAll('.project-card, .about-content').forEach(el => {
    observer.observe(el);
});

// ==========================================
// NAVBAR SCROLL EFFECT (Optional)
// ==========================================
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolling
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// 📝 THÊM JAVASCRIPT TÙY CHỈNH CỦA BẠN TẠI ĐÂY
// ==========================================

// Ví dụ: Form validation, Modal, Dark/Light mode toggle, etc.

/* 
// Example: Log khi click vào project card
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        console.log('Project clicked!');
    });
});
*/