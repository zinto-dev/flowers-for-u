window.onload = () => {
  // 1. Unpause animations after 1s
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // 2. Generate a field of flowers
  const container = document.querySelector('.flowers');
  const flowerCount = 20; 

  for (let i = 0; i < flowerCount; i++) {
    const flower = document.createElement('div');
    flower.className = `flower flower--${i}`;
    flower.style.left = `${Math.random() * 90}%`;
    flower.style.bottom = `${10 + Math.random() * 20}vmin`;
    flower.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
    container.appendChild(flower);
  }

  // 3. NEW: Music Trigger Hook
  // We use this to attempt to play as soon as the window loads
  const audio = document.getElementById('bg-music');
  if (audio) {
    audio.play().catch(error => {
      console.log("Autoplay was blocked, will play on first user interaction.");
    });
  }
};