// GSAP ScrollTrigger Initialization
gsap.registerPlugin(ScrollTrigger);

// Animation: Fade-in and parallax effect for sections
document.querySelectorAll("section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 85%", // Triggers the animation as the section enters the viewport
            end: "bottom 10%",
            toggleActions: "play none none none", // Play animation on enter
            markers: false // Enable this to debug
        }
    });
});

// Add 3D Parallax Scrolling Effect
window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;
    document.querySelectorAll(".parallax-bg").forEach((bg) => {
        let speed = bg.getAttribute("data-speed");
        bg.style.transform = `translateY(${scrollPosition * speed}px)`; // Adjusts based on scroll position
    });
});

// Adding parallax background for each section
document.querySelectorAll('section').forEach(section => {
    let bg = document.createElement('div');
    bg.classList.add('parallax-bg');
    bg.style.backgroundImage = `url('your-image-url.jpg')`;  // Set unique background for each section
    bg.setAttribute('data-speed', 0.5); // Adjust speed for each section
    section.appendChild(bg);
});
