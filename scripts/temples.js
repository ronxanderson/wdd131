// Select page elements
const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

// Toggle mobile navigation
hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
    // adds the class 'show' if it does not currently exist or removes the class if it does exist 
    // the CSS class rules will handle the different views, layouts, and displays 
    // based on the presence of the 'show' class
});

// Reset mobile menu on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {   // 48rem × 16px
        mainNav.classList.remove('show');
        hamButton.classList.remove('show');
    }
    // if screen becomes desktop width with mobile menu open, 
    // remove the mobile menu classes so the menu starts fresh when returning to mobile size.
});

// get date footer year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;