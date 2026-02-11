const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let yesScale = 1;
let noClicks = 0;

const handleNoAction = (e) => {
    if (e) e.preventDefault(); // Stop mobile taps from clicking the button

    // 1. Get the button's size to keep it fully on screen
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 2. Set a safe margin from the edges (80px)
    const margin = 80;

    // 3. Calculate the actual walkable area of the screen
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    // 4. Generate random position within the safe area
    // Math.max ensures we don't get a position less than the margin
    const randomX = Math.max(margin, Math.floor(Math.random() * maxX));
    const randomY = Math.max(margin, Math.floor(Math.random() * maxY));

    // 5. Apply style changes
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '9999'; // Stay on top of everything

    // 6. Grow the Yes Button
    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;
    yesBtn.style.zIndex = '1000'; // Ensure Yes stays visible too

    // 7. Funny text updates
    noClicks++;
    if (noClicks === 2) noBtn.innerText = "Are you sure? 🥺";
    if (noClicks === 4) noBtn.innerText = "Wrong button! 😂";
    if (noClicks >= 6) noBtn.innerText = "Just click Yes! ❤️";
};

// Desktop: Jumps when the mouse touches it
noBtn.addEventListener('mouseover', handleNoAction);

// Mobile: Jumps when the finger touches it
noBtn.addEventListener('touchstart', handleNoAction);

// Click fallback: If they somehow manage to click it
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleNoAction();
});
