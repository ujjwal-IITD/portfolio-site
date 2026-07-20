const customCursor = document.querySelector(".custom-cursor");
const cursorFollower = document.querySelector(".cursor-follower");

// Only run the custom cursor experience on devices with a real pointer (mouse/trackpad)
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (customCursor && cursorFollower && hasFinePointer) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // The dot follows the raw pointer almost instantly for a crisp, responsive feel
    let dotX = mouseX;
    let dotY = mouseY;

    // The ring trails behind with easing for a smooth, weighted feel
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Fast easing for the dot (near-instant tracking)
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;

        // Slower easing for the ring (creates the trailing effect)
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;

        customCursor.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
        cursorFollower.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover animation: any interactive element makes the ring "hug" it and the dot flare pink
    const hoverElements = document.querySelectorAll(
        "a, button, .btn, .card, .nav-link, input, textarea, select"
    );

    hoverElements.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            customCursor.classList.add("is-hovering");
            cursorFollower.classList.add("is-hovering");
        });

        item.addEventListener("mouseleave", () => {
            customCursor.classList.remove("is-hovering");
            cursorFollower.classList.remove("is-hovering");
        });
    });

    // Click feedback: quick pulse on the ring
    document.addEventListener("mousedown", () => {
        cursorFollower.classList.add("is-clicking");
    });
    document.addEventListener("mouseup", () => {
        cursorFollower.classList.remove("is-clicking");
    });

    // Hide cursor elements when the pointer leaves the window
    document.addEventListener("mouseleave", () => {
        customCursor.style.opacity = "0";
        cursorFollower.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        customCursor.style.opacity = "1";
        cursorFollower.style.opacity = "0.9";
    });

} else if (customCursor && cursorFollower) {
    // No fine pointer (touch device): remove custom cursor elements entirely
    customCursor.remove();
    cursorFollower.remove();
}  function setActiveNavLink() { const currentLocation = location.pathname; const navLinks = document.querySelectorAll('.nav-link'); navLinks.forEach((link) => { const href = link.getAttribute('href'); if (currentLocation.includes(href) || (currentLocation.endsWith('/') && href === 'index.html')) { link.classList.add('active'); } else { link.classList.remove('active'); } }); } setActiveNavLink(); const contactForm = document.querySelector('.contact-form'); if (contactForm) { contactForm.addEventListener('submit', (e) => { e.preventDefault(); const submitButton = contactForm.querySelector('.form-submit'); submitButton.innerHTML = 'Message Sent! ✓'; submitButton.disabled = true; contactForm.reset(); setTimeout(() => { submitButton.innerHTML = '<span class="btn-text">Send Message</span>'; submitButton.disabled = false; }, 3000); }); } const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.animation = 'slideInUp 0.8s ease forwards'; observer.unobserve(entry.target); } }); }, observerOptions); document.querySelectorAll('.timeline-animate, .skill-animate, .pub-animate, .conf-animate, .contact-animate').forEach((el) => { observer.observe(el); });
