/* Particle.js initialization */
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
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
                "mode": "repulse"
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


// Get the form element
const contactForm = document.getElementById('contactForm');

// Add a keydown event listener
contactForm.addEventListener('keydown', function (event) {
    // Check if the key is "Enter"
    if (event.key === 'Enter') {
        // Prevent default action only if inside a non-textarea input
        if (event.target.tagName !== 'TEXTAREA') {
            event.preventDefault();
            contactForm.submit(); // Submit the form
        }
    }
});





