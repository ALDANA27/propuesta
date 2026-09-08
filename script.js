const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const letterWindow = document.getElementById('letter-window');
const bgMusic = document.getElementById('bg-music');

const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const pageIndicator = document.getElementById('page-indicator');

let currentPage = 1;
const totalPages = 8;

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
    if (!noBtn) return;
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noBtn.textContent = noPhrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % noPhrases.length;
}

if (noBtn) {
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('click', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });
}

if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        if (letterWindow) letterWindow.style.display = 'block';
        if (question) question.textContent = "¡Dijiste que sí! 💖✨";
        if (noBtn) noBtn.style.display = 'none';

        if (bgMusic) {
            bgMusic.play().catch(() => {});
        }

        if (typeof confetti === 'function') {
            try {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (e) {}
        }
    });
}

function updatePages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    if (pageIndicator) pageIndicator.textContent = `${currentPage} / ${totalPages}`;

    if (prevPageBtn) {
        prevPageBtn.style.display = (currentPage === 1) ? 'none' : 'inline-block';
    }

    if (nextPageBtn) {
        nextPageBtn.style.display = (currentPage === totalPages) ? 'none' : 'inline-block';
    }
}

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
