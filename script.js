
// Get the current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Highlight the current navigation link
document.querySelectorAll(".navbar .nav-link").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// Automatically update the footer year
document.querySelectorAll(".current-year").forEach(element => {
    element.textContent = new Date().getFullYear();
});

// Demonstration contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert(
            "Thank you for contacting us! " +
            "This is a student academic project. " +
            "Your message has not been sent to WHO."
        );

        contactForm.reset();
    });
}
