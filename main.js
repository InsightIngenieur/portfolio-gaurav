document.querySelector('.hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});