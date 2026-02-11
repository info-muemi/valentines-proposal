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
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // 1. Calculate the available width and height of the window
    // We subtract 150px to ensure the button doesn't hit the very edge
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    
    // 2. Generate random positions within those bounds
    // We use Math.max to ensure the number isn't negative
    const x = Math.max(20, Math.floor(Math.random() * maxX));
    const y = Math.max(20, Math.floor(Math.random() * maxY));
    
    // 3. Apply the new position
    noBtn.style.position = 'fixed'; // 'fixed' is better for staying in view
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
