particlesJS('particles-js',{"particles":{"number":{"value":100,"density":{"enable":!0,"value_area":800}},"color":{"value":"#77B254"},"shape":{"type":"circle","stroke":{"width":0,"color":"#77B254"}},"opacity":{"value":1,"random":!0,"anim":{"enable":!0,"speed":0,"opacity_min":0.1}},"size":{"value":3,"random":!0,"anim":{"enable":!0,"speed":100,"size_min":0.1}},"line_linked":{"enable":!0,"distance":150,"color":"#77B254","opacity":0.4,"width":1},"move":{"enable":!0,"speed":3,"direction":"none","random":!0,"straight":!1,"out_mode":"out","bounce":!1,"attract":{"enable":!1,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":!0,"mode":"grab"},"onclick":{"enable":!0,"mode":"push"},"resize":!0}},"retina_detect":!0});document.getElementById("contact-form").addEventListener("submit",async function(event){event.preventDefault();const form=event.target;const formData=new FormData(form);try{const response=await fetch("https://formspree.io/f/xjkvokjd",{method:"POST",headers:{Accept:"application/json",},body:formData,});if(response.ok){document.getElementById("form-response").style.display="block";form.reset()}else{alert("Oops! There was a problem sending your message.")}}catch(error){alert("An error occurred. Please try again later.")}});const hamburgerMenu=document.getElementById("hamburger-menu");const navbar=document.getElementById("navbar");const navLinks=navbar.querySelectorAll("a");hamburgerMenu.addEventListener("click",()=>{navbar.classList.toggle("active")});navLinks.forEach(link=>{link.addEventListener("click",()=>{navbar.classList.remove("active")})});document.addEventListener("click",(e)=>{if(!navbar.contains(e.target)&&!hamburgerMenu.contains(e.target)){navbar.classList.remove("active")}})