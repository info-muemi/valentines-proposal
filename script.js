const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let yesScale = 1;
let noClicks = 0;

// Function to move the button and grow the 'Yes' button
const handleNoAction = () => {
    // 1. Calculate safe boundaries so it doesn't leave the screen
    // We use window.innerWidth/Height to stay within the phone's view
    const padding = 50;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

    // 2. Apply the new position
    // Using 'fixed' ensures it stays relative to the screen, not the card
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${Math.max(padding, x)}px`;
    noBtn.style.top = `${Math.max(padding, y)}px`;

    // 3. Make the YES button bigger every time she tries to say No
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // 4. Update the 'No' button text for a little humor
    noClicks++;
    if (noClicks === 2) noBtn.innerText = "Are you sure? 🥺";
    if (noClicks === 4) noBtn.innerText = "You're playing hard to get! 😂";
    if (noClicks >= 6) noBtn.innerText = "Just click Yes already! ❤️";
};

// Mouse move for laptops
noBtn.addEventListener('mouseover', handleNoAction);

// Touch start for iPhones/Androids (The "No" jumps before she can tap)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the actual click from happening
    handleNoAction();
});