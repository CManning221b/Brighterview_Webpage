const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('navToggle');
const navbarNav = document.getElementById('navbarNav');


window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
    navbarNav.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        navbarNav.classList.remove('open'); // close menu on link click
    });
});