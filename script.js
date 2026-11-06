// Reviews List
const reviews = [
    {
        quote: "Altynai is an exceptionally focused developer. Her work at Ala-Too College shows real craftsmanship and attention to modern design details.",
        name: "Radiia M.",
        role: "Peer & Software Developer",
        letter: "A"
    },
    {
        quote: "Delivered our student project UI on time with clean HTML and responsive styles. Highly recommend working with her!",
        name: "Aman N.",
        role: "Project Manager",
        letter: "S"
    },
    {
        quote: "Fast communicator, solid understanding of JavaScript, and very diligent with deadline commitments.",
        name: "Sirena N.",
        role: "Mentor & Designer",
        letter: "E"
    }
];

let currentSlide = 0;

// Getting Elements from HTML
const quoteText = document.getElementById("quoteText");
const authorName = document.getElementById("authorName");
const authorRole = document.getElementById("authorRole");
const avatarLetter = document.getElementById("avatarLetter");
const slideCounter = document.getElementById("slideCounter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update review content
function showSlide(index) {
    const currentReview = reviews[index];
    quoteText.textContent = currentReview.quote;
    authorName.textContent = currentReview.name;
    authorRole.textContent = currentReview.role;
    avatarLetter.textContent = currentReview.letter;
    slideCounter.textContent = `0${index + 1}/03`;
}

// Arrow Buttons Event Listeners
prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + reviews.length) % reviews.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % reviews.length;
    showSlide(currentSlide);
});

// Price Toggle Checkbox
const priceCheckbox = document.getElementById("priceCheckbox");
const basicPrice = document.getElementById("basicPrice");
const proPrice = document.getElementById("proPrice");
const customPrice = document.getElementById("customPrice");

priceCheckbox.addEventListener("change", () => {
    if (priceCheckbox.checked) {
        // Hourly Prices
        basicPrice.textContent = "$20/hr";
        proPrice.textContent = "$35/hr";
        customPrice.textContent = "$50+/hr";
    } else {
        // Project Prices
        basicPrice.textContent = "$150";
        proPrice.textContent = "$350";
        customPrice.textContent = "$500+";
    }
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your request was submitted successfully.";
    formMessage.style.color = "green";

    contactForm.reset();
});

// Mobile Burger Menu
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        burgerMenu.textContent = "✕";
        burgerMenu.setAttribute("aria-expanded", "true");
    } else {
        burgerMenu.textContent = "☰";
        burgerMenu.setAttribute("aria-expanded", "false");
    }
});

// Close menu after clicking a navigation link
const navItems = navLinks.querySelectorAll("a");

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burgerMenu.textContent = "☰";
        burgerMenu.setAttribute("aria-expanded", "false");
    });
});