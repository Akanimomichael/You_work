// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

const typingElement = document.querySelector(".typing");
const phrases = ["identities |", "strategy |"];
let phraseIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    typingElement.textContent += phrases[phraseIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 150); // Adjust typing speed
  } else {
    setTimeout(deleteText, 1000); // Pause before starting to delete
  }
}


  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Change value based on when you'd like the background to change
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



function deleteText() {
  if (letterIndex > 0) {
    typingElement.textContent = phrases[phraseIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(deleteText, 100); // Adjust deletion speed
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
    setTimeout(type, 500); // Pause before starting to type the next phrase
  }
}

// Start the typing effect
type();



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.achievement-count');
    const speed = 200;

    // Function to start the counting animation
    const animateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCount(counter), 10);
        } else {
            counter.innerText = target;
        }
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting for all counters
                counters.forEach(counter => animateCount(counter));

                // Stop observing once the animation starts
                observer.disconnect();
            }
        });
    });

    // Observe the achievements section
    const achievementsSection = document.querySelector('.achievements');
    observer.observe(achievementsSection);
});




let currentIndex = 0;
const testimonies = document.querySelectorAll(".testimony-item");
const dots = document.querySelectorAll(".dot");

// Show the first testimony when the page loads
testimonies[currentIndex].classList.add("active");
dots[currentIndex].classList.add("active");

// Function to show the current testimony
function setCurrentTestimony(index) {
  testimonies[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  currentIndex = index;
  testimonies[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

// Function to show the next testimony
function nextTestimony() {
  testimonies[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % testimonies.length;
  testimonies[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

// Automatic transition every 5 seconds
setInterval(nextTestimony, 5000);




