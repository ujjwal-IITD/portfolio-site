const customCursor = document.querySelector(".custom-cursor");
const cursorFollower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;


    customCursor.style.left = mouseX + "px";
    customCursor.style.top = mouseY + "px";

});


function animateFollower(){

    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;


    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";


    requestAnimationFrame(animateFollower);

}


animateFollower();


// Hover animation

const hoverElements = document.querySelectorAll(
"a, button, .btn, .card, .nav-link"
);


hoverElements.forEach((item)=>{


    item.addEventListener("mouseenter",()=>{

        customCursor.style.width="18px";
        customCursor.style.height="18px";

        cursorFollower.style.width="60px";
        cursorFollower.style.height="60px";

        cursorFollower.style.borderColor="#ec4899";

    });



    item.addEventListener("mouseleave",()=>{

        customCursor.style.width="10px";
        customCursor.style.height="10px";

        cursorFollower.style.width="40px";
        cursorFollower.style.height="40px";

        cursorFollower.style.borderColor="#6366f1";

    });


}); } function setActiveNavLink() { const currentLocation = location.pathname; const navLinks = document.querySelectorAll('.nav-link'); navLinks.forEach((link) => { const href = link.getAttribute('href'); if (currentLocation.includes(href) || (currentLocation.endsWith('/') && href === 'index.html')) { link.classList.add('active'); } else { link.classList.remove('active'); } }); } setActiveNavLink(); const contactForm = document.querySelector('.contact-form'); if (contactForm) { contactForm.addEventListener('submit', (e) => { e.preventDefault(); const submitButton = contactForm.querySelector('.form-submit'); submitButton.innerHTML = 'Message Sent! ✓'; submitButton.disabled = true; contactForm.reset(); setTimeout(() => { submitButton.innerHTML = '<span class="btn-text">Send Message</span>'; submitButton.disabled = false; }, 3000); }); } const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.animation = 'slideInUp 0.8s ease forwards'; observer.unobserve(entry.target); } }); }, observerOptions); document.querySelectorAll('.timeline-animate, .skill-animate, .pub-animate, .conf-animate, .contact-animate').forEach((el) => { observer.observe(el); }); 
