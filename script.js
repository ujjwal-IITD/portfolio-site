const cursorFollower = document.querySelector(".cursor-follower");

// Only run the custom cursor experience on devices with a real pointer (mouse/trackpad)
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (cursorFollower && hasFinePointer) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Ring position, eased toward the real pointer position each frame
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth easing creates the trailing/lag feel of the reference cursor
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        cursorFollower.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover animation: any interactive element makes the ring grow
    const hoverElements = document.querySelectorAll(
        "a, button, .btn, .card, .nav-link, input, textarea, select"
    );

    hoverElements.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursorFollower.classList.add("is-hovering");
        });

        item.addEventListener("mouseleave", () => {
            cursorFollower.classList.remove("is-hovering");
        });
    });

    // Click feedback: quick contraction of the ring
    document.addEventListener("mousedown", () => {
        cursorFollower.classList.add("is-clicking");
    });
    document.addEventListener("mouseup", () => {
        cursorFollower.classList.remove("is-clicking");
    });

    // Hide the ring when the pointer leaves the window, restore on re-entry
    document.addEventListener("mouseleave", () => {
        cursorFollower.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        cursorFollower.style.opacity = "1";
    });

} else if (cursorFollower) {
    // No fine pointer (touch device): remove the custom cursor entirely
    cursorFollower.remove();
    const customCursor = document.querySelector(".custom-cursor");
    if (customCursor) customCursor.remove();
}  function setActiveNavLink() { const currentLocation = location.pathname; const navLinks = document.querySelectorAll('.nav-link'); navLinks.forEach((link) => { const href = link.getAttribute('href'); if (currentLocation.includes(href) || (currentLocation.endsWith('/') && href === 'index.html')) { link.classList.add('active'); } else { link.classList.remove('active'); } }); } setActiveNavLink(); const contactForm = document.querySelector('.contact-form'); if (contactForm) { contactForm.addEventListener('submit', (e) => { e.preventDefault(); const submitButton = contactForm.querySelector('.form-submit'); submitButton.innerHTML = 'Message Sent! ✓'; submitButton.disabled = true; contactForm.reset(); setTimeout(() => { submitButton.innerHTML = '<span class="btn-text">Send Message</span>'; submitButton.disabled = false; }, 3000); }); } const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.animation = 'slideInUp 0.8s ease forwards'; observer.unobserve(entry.target); } }); }, observerOptions); document.querySelectorAll('.timeline-animate, .skill-animate, .pub-animate, .conf-animate, .contact-animate').forEach((el) => { observer.observe(el); });
