const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const letterWindow = document.getElementById('letter-window');
const bgMusic = document.getElementById('bg-music');

const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const pageIndicator = document.getElementById('page-indicator');

let currentPage = 1;
const totalPages = 8; // Configurado para las 8 páginas

const noPhrases = [
    "¿Segura? 🥺",
    "Piénsalo bien... 💭",
    "¡Mira el otro botón! 💖",
    "¡A ver, intenta otra vez! 😜",
    "No te dejaré presionar no 🙈",
    "¡Ya di que sí! 💕"
];

let phraseIndex = 0;

function moveNoButton() {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    noBtn.style.transform = translate(${randomX}px, ${randomY}px);
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

    // Reproducir música
    if (bgMusic) {
        bgMusic.play().catch(() => {});
    }

    // Efecto de confeti
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});

// Función para cambiar de página
function updatePages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    pageIndicator.textContent = ${currentPage} / ${totalPages};

    // Ocultar/Mostrar botón Anterior
    if (currentPage === 1) {
        prevPageBtn.style.display = 'none';
    } else {
        prevPageBtn.style.display = 'inline-block';
    }

    // Ocultar/Mostrar botón Siguiente
    if (currentPage === totalPages) {
        nextPageBtn.style.display = 'none';
    } else {
        nextPageBtn.style.display = 'inline-block';
    }
}

// Botones de navegación
if (nextPageBtn && prevPageBtn) {
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePages();
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePages();
        }
    });
}
