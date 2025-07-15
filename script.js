// Glow effect on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Typing effect logic
document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");

  const phrases = ["This is my portfolio!", "Creative Coder", "Web Developer"];
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.slice(0, letterIndex);
    typedText.textContent = currentText;

    if (!isDeleting && letterIndex < currentPhrase.length) {
      letterIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && letterIndex > 0) {
      letterIndex--;
      setTimeout(typeEffect, 50);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1200); // pause after typing
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 300); // pause before typing new phrase
      }
    }
  }

  typeEffect(); // Start
});

document.addEventListener("DOMContentLoaded", () => {
  // Typing effect logic...
  // Glow effect on scroll...

  let clickCount = 0;
  const image = document.querySelector(".hero-img");
  const secretMessage = document.getElementById("secretMessage");

  const secretText = `You really clicked 20 times huh? 😂
Hello future Vishal.
You're doing amazing. Keep going.
- Past Vishal 💻 - 2025`;

  image.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 20) {
      image.classList.add("faded");

      setTimeout(() => {
        secretMessage.style.display = "block";
        secretMessage.textContent = ""; // Clear old text
        typeSecretMessage(secretText);
      }, 2000);
    }
  });

  function typeSecretMessage(text, i = 0) {
    if (i < text.length) {
      secretMessage.textContent += text.charAt(i);
      setTimeout(() => typeSecretMessage(text, i + 1), 50);
    }
  }
});



