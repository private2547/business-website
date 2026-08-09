const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    formMessage.style.marginTop = "15px";

    form.reset();
});
