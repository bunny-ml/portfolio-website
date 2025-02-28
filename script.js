/* Particle.js initialization */
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#77B254"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#77B254"
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 100,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#77B254",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});

document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Form data collection
    const form = event.target;
    const formData = new FormData(form);

    // Sending the form data using fetch API
    try {
        const response = await fetch("https://formspree.io/f/xjkvokjd", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });

        if (response.ok) {
            // Display success message
            document.getElementById("form-response").style.display = "block";

            // Reset the form
            form.reset();
        } else {
            alert("Oops! There was a problem sending your message.");
        }
    } catch (error) {
        alert("An error occurred. Please try again later.");
    }
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll("a"); // Select all links inside the navbar

// Toggle navbar on hamburger click
hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close navbar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Close navbar when clicking outside of it
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbar.classList.remove("active");
    }
});
