// query selector
const lis = document.querySelectorAll('.menu-list');
const menuToggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const contactForm = document.querySelector('.contact-form');

// create a toggle menu
const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
};

// toggle button clicked
menuToggle.addEventListener('click', toggleMenu)

// toggle menu clicked
for (let li of lis) {
    li.addEventListener('click', toggleMenu)
}

