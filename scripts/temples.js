// Select page elements
const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

// Toggle mobile navigation
hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');

    // Update the accessible label for screen readers
    if (hamButton.classList.contains('show')) {
        hamButton.setAttribute('aria-label', 'Close navigation menu');
    } else {
        hamButton.setAttribute('aria-label', 'Open navigation menu');
    }
});

// Reset mobile menu on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mainNav.classList.remove('show');
        hamButton.classList.remove('show');
        hamButton.setAttribute('aria-label', 'Open navigation menu');
    }
});

// Get footer year and last modified date
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;