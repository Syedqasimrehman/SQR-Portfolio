// Text EFFECT
// const auto = document.querySelector(".hero__title span");
// let words = [
//   "WORKING ON WEB DEVELOPMENT.",
//   "PROFICINET IN HTML CSS JAVASCRIPT AND REACT JS.",
//   // "USING HTML, CSS, BOOTSTRAP, TAILWINDCSS, JAVASCRIPT, REACT.JS RESPONSIVE.",
// ];
// let wordIndex = 0;
// let charaIndex = 0;
// let isDeleting = false;
// const typeEffect = () => {
//   const currentWrord = words[wordIndex];
//   const currentChar = currentWrord.substring(0, charaIndex);
//   auto.textContent = currentChar;
//   if (!isDeleting && charaIndex < currentWrord.length) {
//     charaIndex++;
//     setTimeout(typeEffect, 150);
//   } else if (isDeleting && charaIndex > 0) {
//     charaIndex--;
//     setTimeout(typeEffect, 50);
//   } else {
//     isDeleting = !isDeleting;
//     wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
//     setTimeout(typeEffect, 1200);
//   }
// };
// typeEffect();
// const auto = document.querySelector(".hero__title span");
// let words = [
//   "WORKING ON WEB DEVELOPMENT.",
//   "PROFICINET IN HTML CSS JAVASCRIPT AND REACT JS.",
//   // "USING HTML, CSS, BOOTSTRAP, TAILWINDCSS, JAVASCRIPT, REACT.JS RESPONSIVE.|",
// ];

const auto = document.querySelector(".hero__title span");
const blinkSpan = document.querySelector(".hero__title .blink");
let words = [
  // "WORKING ON WEB DEVELOPMENT.",
  // "PROFICINET IN HTML CSS JAVASCRIPT AND REACT JS.",
  "USING HTML, CSS, BOOTSTRAP, TAILWINDCSS, JAVASCRIPT, REACT.JS RESPONSIVE.",
];

let wordIndex = 0;
let charaIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charaIndex);
  auto.textContent = currentChar;
  blinkSpan.style.visibility = charaIndex % 2 ? "hidden" : "visible";

  if (!isDeleting && charaIndex < currentWord.length) {
    charaIndex++;
    setTimeout(typeEffect, 170);
  } else if (isDeleting && charaIndex > 0) {
    charaIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, isDeleting ? 1200 : 500);
  }
};

typeEffect();

// JavaScript for smooth scrolling to sections
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSectionId = link.getAttribute("href");
      const targetSection = document.querySelector(targetSectionId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   const skillSection = document.getElementById('skill');
//   const progressBars = document.querySelectorAll('.progress-bar > div');

//   function activateAnimations() {
//       progressBars.forEach(bar => {
//           const percentage = parseInt(bar.style.width);
//           if (percentage >= 70) {
//               bar.parentElement.classList.add('animate'); // Add a CSS class to trigger the animation
//           }
//       });
//   }

//   function checkVisibility() {
//       const rect = skillSection.getBoundingClientRect();
//       const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
//       if (isVisible) {
//           activateAnimations();
//           // Remove the scroll listener after activating animations to improve performance
//           window.removeEventListener('scroll', checkVisibility);
//       }
//   }

//   window.addEventListener('scroll', checkVisibility);
// });
