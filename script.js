const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const letterWindow = document.getElementById('letter-window');
const question = document.getElementById('question');
const bgMusic = document.getElementById('bg-music');

// Frases divertidas para el botón NO
const noPhrases = [
    "¿Segura? 🥺",
    "¡Pénsalo bien! 💭",
    "¿De verdad? 💔",
    "¡MIRA EL OTRO BOTÓN! 👀",
    "¡A ver, intenta otra vez! 😂",
    "No te dejaré presionar no 🙈",
    "¡Ya di que sí! 💕"
];

let phraseIndex = 0;

// Función para intentar reproducir la música sin bloquear el script si falta el archivo
function tryPlayMusic() {
    if (bgMusic) {
        bgMusic.play().catch(error => {
            console.log("Audio no disponible o esperando interacción.");
        });
    }
}

// Mover el botón NO y cambiar su texto
function moveNoButton() {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    
    noBtn.style.transform = translate(${randomX}px, ${randomY}px);
    
    noBtn.textContent = noPhrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % noPhrases.length;

    tryPlayMusic();
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Acción principal al dar clic en ¡Sí!
yesBtn.addEventListener('click', () => {
    letterWindow.style.display = 'block';
    question.textContent = "¡Dijiste que sí! 💖✨";
    noBtn.style.display = 'none';

    tryPlayMusic();

    // Efecto de confeti
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff']
        });
    }
});

  
