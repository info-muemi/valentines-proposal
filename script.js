const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let yesScale = 1;
let noClicks = 0;

const handleNoAction = (e) => {
    // 1. Critical for mobile: prevent the "click" from firing while moving
    if (e) e.preventDefault(); 

    // 2. Get the button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 3. Define a "Strict Safe Zone" 
    // This ensures the button stays away from the edges where it hides
    const padding = 100; 
    const safeWidth = window.innerWidth - btnWidth - (padding * 2);
    const safeHeight = window.innerHeight - btnHeight - (padding * 2);

    // 4. Calculate coordinates within that safe inner-box
    const randomX = Math.floor(Math.random() * safeWidth) + padding;
    const randomY = Math.floor(Math.random() * safeHeight) + padding;

    // 5. Force the button to the top layer and the new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '10000'; // Higher than the card

    // 6. Grow the Yes button
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
    yesBtn.style.zIndex = '999'; 

    // 7. Funny text updates
    noClicks++;
    const phrases = [
        "Are you sure? 🥺",
        "Wrong button! 😂",
        "Try again! ⚡",
        "Not today! 🏃‍♂️",
        "Just click Yes! ❤️"
    ];
    if (noClicks <= phrases.length) {
        noBtn.innerText = phrases[noClicks - 1];
    }
};

// Listeners for all devices
noBtn.addEventListener('mouseover', handleNoAction);
noBtn.addEventListener('touchstart', handleNoAction, {passive: false});

// Ensure the Yes button actually works
yesBtn.addEventListener('click', () => {
    window.location.href = 'thanks.html';
});
