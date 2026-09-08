const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const letterWindow = document.getElementById('letter-window');
const question = document.getElementById('question');
const bgMusic = document.getElementById('bg-music');

// Lista de respuestas graciosas que cambiarán en el botón NO
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

// Función para mover el botón NO y cambiar el texto
function moveNoButton() {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    
    noBtn.style.transform = translate(${randomX}px, ${randomY}px);
    
    // Cambia la frase del botón No
    noBtn.textContent = noPhrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % noPhrases.length;

    // Intenta reproducir la música si no ha iniciado
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Acción al presionar "SÍ"
yesBtn.addEventListener('click', () => {
    letterWindow.style.display = 'block';
    question.textContent = "¡Dijiste que sí! 💖✨";
    noBtn.style.display = 'none';

    // Reproduce la música
    bgMusic.play().catch(() => {});

    // Lluvia de corazones (Confeti)
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff']
    });
});
