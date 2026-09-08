document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const letterWindow = document.getElementById('letter-window');
    const question = document.getElementById('question');

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

    function moveNoButton() {
        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 200) - 100;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noBtn.textContent = noPhrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % noPhrases.length;
    }

    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('click', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    yesBtn.addEventListener('click', () => {
        letterWindow.style.display = 'block';
        question.textContent = "¡Dijiste que sí! 💖✨";
        noBtn.style.display = 'none';

        // Intenta reproducir música si existe el elemento
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.play().catch(() => {});
        }
    });
});
