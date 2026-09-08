const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const letterWindow = document.getElementById('letter-window');
const question = document.getElementById('question');

// Hace que el botón "No" se mueva y esquive el cursor/toque
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// También para pantallas táctiles de celulares
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Muestra el mensaje bonito cuando presionan "Sí"
yesBtn.addEventListener('click', () => {
    letterWindow.style.display = 'block';
    question.textContent = "¡Dijiste que sí! 💖";
    noBtn.style.display = 'none';
});
