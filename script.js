particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.js loaded');
});
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => alert('Message Sent!'), error => console.log(error));
});

AOS.init();


// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙'; // Set icon to Moon
}

// Add event listener for toggle button
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Update button icon
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙'; // Set icon to Moon
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        themeToggle.textContent = '☀️'; // Set icon to Sun
        localStorage.setItem('theme', 'dark'); // Save preference
    }
});
