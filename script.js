let score = 0;
let timeLeft = 30;
let timer;
let gameInterval;

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').textContent = score;
    document.getElementById('time').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            clearInterval(gameInterval);
            alert('Tempo esgotado! Sua pontuação final é: ' + score);
        }
    }, 1000);

    gameInterval = setInterval(createBubble, 1000);
}

function createBubble() {
    const gameArea = document.getElementById('gameArea');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    bubble.style.top = Math.random() * (gameArea.offsetHeight - 30) + 'px';
    bubble.style.left = Math.random() * (gameArea.offsetWidth - 30) + 'px';

    bubble.onclick = () => {
        score++;
        document.getElementById('score').textContent = score;
        bubble.remove();
    };

    gameArea.appendChild(bubble);

    setTimeout(() => {
        if (bubble.parentElement) {
            bubble.remove();
        }
    }, 900);
}