const customCursor = document.querySelector('.custom-cursor'); const cursorFollower = document.querySelector('.cursor-follower'); if (customCursor && cursorFollower) { let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Main cursor follows instantly
    customCursor.style.left = mouseX + "px";
    customCursor.style.top = mouseY + "px";
});

function animateFollower() {
    // Change 0.12 to control speed
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    cursorFollower.style.left = (followerX - 20) + "px";
    cursorFollower.style.top = (followerY - 20) + "px";

    requestAnimationFrame(animateFollower);
}

animateFollower(); const hoverElements = document.querySelectorAll('a, button, input, textarea, .card, .btn, .nav-link'); hoverElements.forEach((el) => { el.addEventListener('mouseenter', () => { customCursor.style.transform = 'translate(-50%, -50%) scale(1.5)'; customCursor.style.backgroundColor = 'rgba(99, 102, 241, 0.8)'; cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.6)'; cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.3)'; }); el.addEventListener('mouseleave', () => { customCursor.style.transform = 'translate(-50%, -50%) scale(1)'; customCursor.style.backgroundColor = 'rgb(99, 102, 241)'; cursorFollower.style.borderColor = 'rgb(99, 102, 241)'; cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)'; }); }); } function setActiveNavLink() { const currentLocation = location.pathname; const navLinks = document.querySelectorAll('.nav-link'); navLinks.forEach((link) => { const href = link.getAttribute('href'); if (currentLocation.includes(href) || (currentLocation.endsWith('/') && href === 'index.html')) { link.classList.add('active'); } else { link.classList.remove('active'); } }); } setActiveNavLink(); const contactForm = document.querySelector('.contact-form'); if (contactForm) { contactForm.addEventListener('submit', (e) => { e.preventDefault(); const submitButton = contactForm.querySelector('.form-submit'); submitButton.innerHTML = 'Message Sent! ✓'; submitButton.disabled = true; contactForm.reset(); setTimeout(() => { submitButton.innerHTML = '<span class="btn-text">Send Message</span>'; submitButton.disabled = false; }, 3000); }); } const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.animation = 'slideInUp 0.8s ease forwards'; observer.unobserve(entry.target); } }); }, observerOptions); document.querySelectorAll('.timeline-animate, .skill-animate, .pub-animate, .conf-animate, .contact-animate').forEach((el) => { observer.observe(el); }); 
