// Tombol Subway Surfers
document.getElementById('playBtn').addEventListener('click', () => {
    window.open('https://poki.com/id/g/subway-surfers', '_blank');
});

// Semua tombol kartu game
document.querySelectorAll('.card-play').forEach((btn, index) => {
    const linkGame = [
        'https://poki.com/id/g/hill-climb-racing',
        'https://poki.com/id/g/basketball-stars',
        'https://poki.com/id/g/block-puzzle',
        'https://poki.com/id/g/soccer-skills'
    ];
    btn.addEventListener('click', () => {
        window.open(linkGame[index], '_blank');
    });
});
