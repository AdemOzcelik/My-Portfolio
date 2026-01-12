/* =========================
   Navigation Toggle
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
});

/* =========================
   Smooth Scrolling
========================= */

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* =========================
   Project Filtering
========================= */

function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");

    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

/* =========================
   Lightbox for Images
========================= */

const images = document.querySelectorAll("#projects img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* =========================
   Contact Form Validation
========================= */

const form = document.getElementById("contact-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    form.reset();
});

/* =========================
   Debug Helper
========================= */

console.log("JavaScript loaded successfully");
