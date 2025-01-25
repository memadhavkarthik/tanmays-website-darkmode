// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        closeNavbar(); // Close the navbar after clicking a link
    });
});

document.querySelector('.navbar-title').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("show");
}

function closeNavbar() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.remove("show");
}

// Add this script at the end of your HTML file or in a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});