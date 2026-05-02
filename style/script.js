/* Particle.js initialization */
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50,
          
        },
        "color": {
            "value": "#26c859"
        },
         
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0.5,
                "color": "#26c859"
            }
        },
        "opacity": {
            "value": 1,
            "anim": {
                "enable": false,
                "speed": 0,
                "opacity_min": 0.9
            }
        },
        "size": {
            "value": 2,
            "random": false,
            "anim": {
                "enable": false,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#050404",
            "opacity": 0.9,
            "width": 1
        },
     
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "push"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
        
        }
    },
    "retina_detect": true
});

// document.getElementById("contact-form").addEventListener("submit", async function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Form data collection
//     const form = event.target;
//     const formData = new FormData(form);

//     // Sending the form data using fetch API
//     try {
//         const response = await fetch("https://formspree.io/f/xjkvokjd", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//             },
//             body: formData,
//         });

//         if (response.ok) {
//             // Display success message
//             document.getElementById("form-response").style.display = "block";

//             // Reset the form
//             form.reset();
//         } else {
//             alert("Oops! There was a problem sending your message.");
//         }
//     } catch (error) {
//         alert("An error occurred. Please try again later.");
//     }
// });

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
