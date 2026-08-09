const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const text =
        "Hello Abba Ismail Global Services!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message;

    const whatsappURL =
        "https://wa.me/2348133216193?text=" +
        encodeURIComponent(text);

    window.location.href = whatsappURL;
});
