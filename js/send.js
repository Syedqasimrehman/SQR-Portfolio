// Text EFFECT 
const auto = document.querySelector('.hero__title span');
let words = ["SYED QASIM REHMAN", 'WEB DEVELOPER', 'USING HTML CSS FOR RESPONSIVE WEB AND JAVASCRIPT FOR ANIMATION']


let wordIndex = 0;
let charaIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWrord = words[wordIndex];
    const currentChar = currentWrord.substring(0, charaIndex);
    auto.textContent = currentChar;

    if (!isDeleting && charaIndex < currentWrord.length) {
        charaIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charaIndex > 0) {
        charaIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200)
    }
}
typeEffect();



    // JavaScript for smooth scrolling to sections
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetSectionId = link.getAttribute('href');
                const targetSection = document.querySelector(targetSectionId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
