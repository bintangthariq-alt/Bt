// Fungsi saat tombol Mainkan diklik
document.getElementById('playBtn').addEventListener('click', () => {
    alert('🚀 Memuat Subway Surfers...\n\n*Catatan: Untuk versi lengkap, kamu perlu menyematkan (embed) tautan game resmi dari penyedia game yang diizinkan.*');
});

// Fungsi tombol mainkan di kartu game
document.querySelectorAll('.card-play').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🎮 Memuat game...\n\nTambahkan tautan game asli pada kode ini nanti!');
    });
});
