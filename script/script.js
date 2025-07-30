const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about-section, .about-heading, .projects-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    sections.forEach(section => observer.observe(section));
});

const progressBar = document.getElementById("scroll-progress-bar");

window.addEventListener ('scroll', () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop/documentHeight) * 100;

    progressBar.style.width = scrollPercent + '%';
});