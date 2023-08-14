var tl = gsap.timeline();

tl.from("nav", {
  y: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

let menuBar = document.getElementById("bar");
let cross = document.getElementById("cross");

let ba = document.getElementById("menu-bar"); // Define the menu bar element
menuBar.addEventListener("click", function () {
  tl.from("#menu-bar", {
    y: -100, // Start position above the viewport
    x: "100%", // Start position to the right of the viewport
    duration: 2,
    opacity: 0,
    ease: "power2.out", // Easing function for smoother motion
  });
  ba.style.display = "block";
});

cross.addEventListener("click", function () {
  let ba = document.getElementById("menu-bar");
  ba.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = "Form Submitted";

    form.appendChild(popup);

    setTimeout(function () {
      form.removeChild(popup);
    }, 1000); // Hide popup after 10 seconds
  });
});

let downloadButton = document.getElementById("download-cv");

let pdfUrl = "path/to/your/cv.pdf";

downloadButton.addEventListener("click", function () {
  let link = document.createElement("a");

  link.href = pdfUrl;
  link.download = "./CV/Wajahat's Resume.pdf";

  link.click();

  link.remove();
});

let emailButton = document.getElementById("about-email");

// Email address
let emailAddress = "wajahatbaloch2002@gmail.com"; // Replace with the desired email address

// Add a click event listener to the button
emailButton.addEventListener("click", function () {
  // Create the mailto URL
  let mailtoUrl = "mailto:" + emailAddress;

  // Open the default email client
  window.location.href = mailtoUrl;
});
